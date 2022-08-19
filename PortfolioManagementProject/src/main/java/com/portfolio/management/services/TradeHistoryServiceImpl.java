package com.portfolio.management.services;

import com.portfolio.management.entities.TradeHistory;
import com.portfolio.management.entities.User;
import com.portfolio.management.repos.TradeHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
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

    public int getHoldingStockQuantities(int userID, int stockID) {
        ArrayList<TradeHistory> tradeHistories = tradeHistoryRepository.findByUserIDAndStockID(userID,stockID);
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

    HashMap<String, BigDecimal> cache = new HashMap<>();
//    public BigDecimal getCurrentWealth() {
//
//    }



}
