package com.portfolio.management.repos;

import com.portfolio.management.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioManagementRepository extends JpaRepository<User, String> {


}