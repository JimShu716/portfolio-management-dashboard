package com.portfolio.management.services;

import com.portfolio.management.entities.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

public interface PortfolioManagementService {
    public Optional<User> fetchUserById(String id);
}
