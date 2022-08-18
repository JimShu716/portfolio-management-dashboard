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
    @PostMapping(value = "/addUser/{email}/{userName}/{passWord}")
    public ResponseEntity setUserInformation(@PathVariable String email, @PathVariable String userName, @PathVariable String passWord){
        User user = new User(email, userName, passWord);
        portfolioManagementService.addUser(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping(value = "/changePassWord/{userID}/{passWord}")
    public ResponseEntity changePassWord(@PathVariable int userID, @PathVariable String passWord){
        User user = portfolioManagementService.updateUserPassWord(userID, passWord);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PutMapping(value = "/updateBalance/{userID}/{balance}")
    public ResponseEntity changeBalance(@PathVariable int userID, @PathVariable double balance){
        User user = portfolioManagementService.updateUserBalance(userID, balance);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }


}
