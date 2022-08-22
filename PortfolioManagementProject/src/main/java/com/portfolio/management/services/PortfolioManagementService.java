package com.portfolio.management.services;

import com.portfolio.management.entities.TradeHistory;
import com.portfolio.management.entities.User;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;

public interface PortfolioManagementService {
    public Optional<User> fetchUserById(int userID);


    public void addUser(User user);

    public User updateUserPassWord(int userID, String passWord);

    public void addUserTradeHistory(User user);

    public User addUserBalance(int userID, BigDecimal balance);

    public User withdrawUserBalance(int userID, BigDecimal balance) throws Exception;

    public User updateUserBalance(int userID, BigDecimal balance);

    public BigDecimal getBalance(int userID);
}
