package com.portfolio.management.services;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.portfolio.management.entities.HoldingSummary;
import com.portfolio.management.entities.TradeHistory;
import com.portfolio.management.investment.marketDataDownload.MarketData;
import com.portfolio.management.repos.TradeHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Optional;

import java.util.*;
@Service
public class TradeHistoryServiceImpl implements TradeHistoryService {
    @Autowired
    private TradeHistoryRepository tradeHistoryRepository;

    public void addTradeHistory(TradeHistory tradeHistory) {
        tradeHistoryRepository.save(tradeHistory);
    }


    // Optional -> when not able to find this id, return null
    public Optional<TradeHistory> fetchTradeHistoryById(int tradeHistoryID){
        Optional<TradeHistory> tradeHistory = tradeHistoryRepository.findById(tradeHistoryID);
        return tradeHistory;
    }

    public int getHoldingStockQuantities(int userID, String stockSymbol) {
        ArrayList<TradeHistory> tradeHistories = tradeHistoryRepository.findByUserIDAndStockSymbol(userID,stockSymbol);
        int totalQuantity = 0;
        for (TradeHistory tradeHistory : tradeHistories) {
            if (tradeHistory.getProperty().equals("buy")) {
                totalQuantity += tradeHistory.getPurchasedQuantities();
            } else if (tradeHistory.getProperty().equals("sale")) {
                totalQuantity -= tradeHistory.getPurchasedQuantities();
            }
        }
        return totalQuantity;
    }

    HashMap<String, BigDecimal> cache;
    public BigDecimal getCurrentWealth(int userID) throws UnirestException {
        cache = new HashMap<>();
        BigDecimal wealth = new BigDecimal("0");
        ArrayList<TradeHistory> tradeHistories = tradeHistoryRepository.findByUserID(userID);
        MarketData marketData;

        for (TradeHistory tradeHistory : tradeHistories) {
            String symbol = String.valueOf(tradeHistory.getStockSymbol());
            int quantity = tradeHistory.getPurchasedQuantities();
            BigDecimal price;
            if (!cache.containsKey(symbol)) {
                marketData = new MarketData(symbol);
                price = marketData.getCurrentPrice();
                cache.put(symbol,price);
            } else {
                price = cache.get(symbol);
            }
            if (tradeHistory.getProperty().equals("buy")) {
                wealth = wealth.add(price.multiply(BigDecimal.valueOf(quantity)));
            } else if (tradeHistory.getProperty().equals("sale")) {
                wealth = wealth.subtract(price.multiply(BigDecimal.valueOf(quantity)));
            }
        }
        return wealth;
    }

    public HoldingSummary getHoldingSummaryPerStockUser(int userID, String stockSymbol) throws UnirestException {
        ArrayList<TradeHistory> tradeHistories = tradeHistoryRepository.findByUserIDAndStockSymbol(userID,stockSymbol);
        int totalQuantity = 0;
        BigDecimal prevCost = new BigDecimal(0);
        int buyQuantity = 0;
        BigDecimal buyPrices = new BigDecimal(0);
        for (TradeHistory tradeHistory : tradeHistories) {
            if (tradeHistory.getProperty().equals("buy")) {
                int quantity = tradeHistory.getPurchasedQuantities();
                totalQuantity += quantity;
                BigDecimal price = tradeHistory.getPurchasedPrice();
                buyPrices = buyPrices.add(price.multiply(BigDecimal.valueOf(quantity)));
                buyQuantity = buyQuantity + quantity;

            } else if (tradeHistory.getProperty().equals("sale")) {
                totalQuantity -= tradeHistory.getPurchasedQuantities();
            }
        }
        BigDecimal averageCost = buyPrices.divide(BigDecimal.valueOf(buyQuantity), 2, RoundingMode.HALF_UP);
        MarketData marketData = new MarketData(stockSymbol);
        BigDecimal curPrice = marketData.getCurrentPrice();
        BigDecimal totalReturn = (curPrice.subtract(averageCost)).multiply(BigDecimal.valueOf(totalQuantity));
        HoldingSummary holdingSummary = new HoldingSummary(stockSymbol, totalQuantity, averageCost, curPrice, totalReturn);
        return holdingSummary;
    }
}
