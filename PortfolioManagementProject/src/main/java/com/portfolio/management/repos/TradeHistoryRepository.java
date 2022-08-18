package com.portfolio.management.repos;

import com.portfolio.management.entities.TradeHistory;
import com.portfolio.management.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TradeHistoryRepository extends JpaRepository<TradeHistory, Integer> {
}
