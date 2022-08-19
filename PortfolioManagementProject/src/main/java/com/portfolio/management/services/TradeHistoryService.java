package com.portfolio.management.services;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.portfolio.management.entities.TradeHistory;
import com.portfolio.management.entities.User;

import java.math.BigDecimal;
import java.util.Optional;

public interface TradeHistoryService {
    public void addTradeHistory(com.portfolio.management.entities.TradeHistory tradeHistory);

    public Optional<TradeHistory> fetchTradeHistoryById(int tradeHistoryID);

    public int getHoldingStockQuantities(int userID, String stockSymbol);

    public BigDecimal getCurrentWealth(int userID) throws UnirestException;
}
