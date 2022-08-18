package com.portfolio.management.services;

import com.portfolio.management.entities.TradeHistory;
import com.portfolio.management.entities.User;

import java.util.Optional;

public interface TradeHistoryService {
    public void addTradeHistory(com.portfolio.management.entities.TradeHistory tradeHistory);

    public Optional<TradeHistory> fetchTradeHistoryById(int tradeHistoryID);
}
