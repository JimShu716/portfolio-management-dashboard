package com.portfolio.management.rest;

import com.portfolio.management.entities.User;
import com.portfolio.management.services.PortfolioManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.security.SecureRandom;
import java.util.Optional;

@Controller
@RequestMapping(name = "/user")
@CrossOrigin // allows requests from all domains
public class PortfolioManagementController {

    @Autowired
    private PortfolioManagementService portfolioManagementService;

    @GetMapping(value = "/{id}")
    public ResponseEntity<Optional<User>> fetchUserInformation(@PathVariable String id){
        Optional<User> user = portfolioManagementService.fetchUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
