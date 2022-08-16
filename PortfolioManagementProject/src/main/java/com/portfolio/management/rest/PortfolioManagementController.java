package com.portfolio.management.rest;

import com.portfolio.management.entities.TradeHistory;
import com.portfolio.management.entities.User;
import com.portfolio.management.services.PortfolioManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.security.SecureRandom;
import java.util.Optional;

@RestController
@RequestMapping(name = "/user")
@CrossOrigin // allows requests from all domains
public class PortfolioManagementController {

    @Autowired
    private PortfolioManagementService portfolioManagementService;

//    http://localhost:8080/H1@gmail.com
    @GetMapping(value = "/{userID}")
    public ResponseEntity<User> getTradeHistoryWithID(@PathVariable int userID) {
        Optional<User> user  = portfolioManagementService.fetchUserById(userID);
        if (user.isPresent()) {
            return new ResponseEntity<User>(user.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //http://localhost:8080/adduser/K1@gmail.com/Kate/1111
    //http://localhost:8080/?email=K1@gmail.com&name=Kate&passWord=1111
    @PostMapping(value = "/adduser/{userID}/{email}/{userName}/{passWord}")
    public ResponseEntity setUserInformation(@PathVariable int userID, @PathVariable String email, @PathVariable String userName, @PathVariable String passWord){
        User user = new User(userID, email, userName, passWord);
        portfolioManagementService.addUser(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    //http://localhost:8080/H1@gmail.com/250/changePassWord
    @PutMapping(value = "/{userID}/{passWord}/changePassWord")
    public ResponseEntity changePassWord(@PathVariable int userID, @PathVariable String passWord){
        portfolioManagementService.updateUserPassWord(userID, passWord);
        return new ResponseEntity(HttpStatus.OK);
    }




}
