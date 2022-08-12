package com.portfolio.management.repos;

import com.portfolio.management.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


public interface PortfolioManagementRepository extends JpaRepository<User, String> {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="stockID")
    private Integer stockID;


    @Column(name="stockName")
    private String stockName;


}