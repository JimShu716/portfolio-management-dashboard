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

    //http://localhost:8080/H1@gmail.com
    @GetMapping(value = "/{email}")
    public ResponseEntity<Optional<User>> fetchUserInformation(@PathVariable String email){
        Optional<User> user = portfolioManagementService.fetchUserById(email);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    //http://localhost:8080/K1@gmail.com/Kate/1111
    //http://localhost:8080/?email=K1@gmail.com&name=Kate&passWord=1111
   // @GetMapping(value = "?email={email}&name={userName}&passWord={passWord}")
    @GetMapping(value = "/{email}/{userName}/{passWord}")
    public ResponseEntity setUserInformation(@PathVariable String email, @PathVariable String userName, @PathVariable String passWord){
        User user = new User(email, userName, passWord);
        portfolioManagementService.addUser(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
