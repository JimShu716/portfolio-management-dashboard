package com.portfolio.management.repos;

import com.portfolio.management.entities.TradeHistory;
import com.portfolio.management.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface PortfolioManagementRepository extends JpaRepository<User, Integer> {
    User findByEmail(String email);
}