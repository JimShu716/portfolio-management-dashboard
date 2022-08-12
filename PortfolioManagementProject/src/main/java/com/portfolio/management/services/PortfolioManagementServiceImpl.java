package com.portfolio.management.services;

import com.portfolio.management.repos.PortfolioManagementRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class PortfolioManagementServiceImpl implements PortfolioManagementService {

    @Autowired
    private PortfolioManagementRepository dao;

}
