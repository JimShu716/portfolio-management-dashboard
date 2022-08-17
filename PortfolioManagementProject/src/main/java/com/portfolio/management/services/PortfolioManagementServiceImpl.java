package com.portfolio.management.services;

import com.portfolio.management.entities.TradeHistory;
import com.portfolio.management.entities.User;
import com.portfolio.management.repos.PortfolioManagementRepository;
import com.portfolio.management.repos.TradeHistoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

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


    public void updateUserPassWord(int userID, String passWord) {
        portfolioManagementRepository.save(new User(userID, passWord));
    }

    public void addUserTradeHistory(User user) {
        portfolioManagementRepository.save(user);
    }


}
