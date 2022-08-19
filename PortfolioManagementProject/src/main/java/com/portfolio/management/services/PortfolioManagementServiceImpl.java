package com.portfolio.management.services;

import com.portfolio.management.entities.TradeHistory;
import com.portfolio.management.entities.User;
import com.portfolio.management.repos.PortfolioManagementRepository;
import com.portfolio.management.repos.TradeHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import java.math.BigDecimal;
import java.util.Optional;
@Service
public class PortfolioManagementServiceImpl implements PortfolioManagementService {

    @Autowired
    private PortfolioManagementRepository portfolioManagementRepository;


    // Optional -> when not able to find this id, return null
    public Optional<User> fetchUserById(int userID){
        Optional<User> user = portfolioManagementRepository.findById(userID);
        return user;
    }


    public void addUser(User user){
        portfolioManagementRepository.save(user);
    }


    public User updateUserPassWord(int userID, String passWord) {
        Optional<User> user = portfolioManagementRepository.findById(userID);
        User curUser = null;
        if(user.isPresent()) {
            curUser = user.get();
            curUser.setUserPassword(passWord);
            portfolioManagementRepository.save(curUser);
        }
        return curUser;
    }

    public User updateUserBalance(int userID, BigDecimal balance) {
        Optional<User> user = portfolioManagementRepository.findById(userID);
        User curUser = null;
        if(user.isPresent()) {
            curUser = user.get();
            curUser.setBalance(balance);
            portfolioManagementRepository.save(curUser);
        }
        return curUser;
    }

    public User addUserBalance(int userID, BigDecimal addAmount) {
        Optional<User> user = portfolioManagementRepository.findById(userID);
        User curUser = null;
        if(user.isPresent()) {
            curUser = user.get();
            curUser.setBalance(curUser.getBalance().add(addAmount));
            portfolioManagementRepository.save(curUser);
        }
        return curUser;
    }

    public User withdrawUserBalance(int userID, BigDecimal withdrawAmount) throws Exception {
        Optional<User> user = portfolioManagementRepository.findById(userID);
        User curUser = null;
        BigDecimal curBalance;
        if(user.isPresent()) {
            curUser = user.get();
            curBalance = curUser.getBalance();
            if (curBalance.compareTo(withdrawAmount) < 0) {
                throw new Exception();
            } else {
                curUser.setBalance(curBalance.subtract(withdrawAmount));
                portfolioManagementRepository.save(curUser);
            }
        }
        return curUser;
    }

    public void addUserTradeHistory(User user) {
        portfolioManagementRepository.save(user);
    }

    /**
     * get current balance of the user using the provided userID
     * @param userID
     */
    public BigDecimal getBalance(int userID) {
        Optional<User> user = portfolioManagementRepository.findById(userID);
        User curUser = null;
        if(user.isPresent()) {
            curUser = user.get();
            BigDecimal balance = curUser.getBalance();
            return balance;
        }
        return null;
    }

}
