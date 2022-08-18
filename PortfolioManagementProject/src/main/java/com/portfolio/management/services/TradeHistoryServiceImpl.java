package com.portfolio.management.services;

import com.portfolio.management.entities.TradeHistory;
import com.portfolio.management.entities.User;
import com.portfolio.management.repos.TradeHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

}
