package com.portfolio.management.services;

import com.portfolio.management.entities.User;
import com.portfolio.management.repos.PortfolioManagementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class PortfolioManagementServiceImpl implements PortfolioManagementService {

    @Autowired
    private PortfolioManagementRepository portfolioManagementRepository;

    // Optional -> when not able to find this id, return null
    public Optional<User> fetchUserById(String id){
        Optional<User> user = portfolioManagementRepository.findById(id);
        return user;
    }

}
