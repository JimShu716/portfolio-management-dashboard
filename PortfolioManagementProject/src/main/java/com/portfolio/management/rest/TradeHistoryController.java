package com.portfolio.management.rest;

import com.portfolio.management.entities.TradeHistory;
import com.portfolio.management.entities.User;
import com.portfolio.management.services.PortfolioManagementService;
import com.portfolio.management.services.TradeHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(name = "/tradeHistory")
@CrossOrigin // allows requests from all domains
public class TradeHistoryController {
    @Autowired
    private TradeHistoryService tradeHistoryService;

    @Autowired
    private PortfolioManagementService portfolioManagementService;

    @PostMapping(value = "/addTradeHistory")
    public ResponseEntity addTradeHistory(@RequestBody TradeHistory tradeHistory){
        String propperty = tradeHistory.getProperty();
        int userID = tradeHistory.getUserID();
        int stockID = tradeHistory.getStockID();
        int purchasedQuantities = tradeHistory.getPurchasedQuantities();
        Double curBalance = portfolioManagementService.getBalance(userID);
        Double transactionMoney = tradeHistory.getPurchasedQuantities()* tradeHistory.getPurchasedPrice();
        if (propperty.equals("buy")) {
            if (curBalance > transactionMoney ) {
                // add this record to TradeHistory table
                tradeHistoryService.addTradeHistory(tradeHistory);

                // update the curBalance in the User table
                curBalance = curBalance - transactionMoney;
                User user = portfolioManagementService.updateUserBalance(userID, curBalance);
                return new ResponseEntity<>(user, HttpStatus.OK);
            } else {
                return ResponseEntity.status(HttpStatus.FORBIDDEN)
                        .body("Insufficient Balance, transaction is forbidden");
            }
        } if (propperty.equals("sale")) {
            int holdingStockQuantities = tradeHistoryService.getHoldingStockQuantities(userID, stockID);
            if (purchasedQuantities <= holdingStockQuantities) {
                // add this record to TradeHistory table
                tradeHistoryService.addTradeHistory(tradeHistory);

                // update the curBalance in the User table
                curBalance = curBalance + transactionMoney;
                User user = portfolioManagementService.updateUserBalance(userID, curBalance);
                return new ResponseEntity<>(user, HttpStatus.OK);
            } else {
                return ResponseEntity.status(HttpStatus.FORBIDDEN)
                        .body("Insufficient Stock holding, transaction is forbidden. Your current holding is" + holdingStockQuantities);
            }
        }
        return null;
    }

    @GetMapping(value = "/tradeHistory/{tradeHistoryID}")
    public ResponseEntity<TradeHistory> getTradeHistoryWithID(@PathVariable int tradeHistoryID) {
        Optional<TradeHistory> tradeHistory = tradeHistoryService.fetchTradeHistoryById(tradeHistoryID);
        if (tradeHistory.isPresent()) {
            return new ResponseEntity<TradeHistory>(tradeHistory.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @GetMapping(value = "/currentTotalWealth/{userID}")
    public ResponseEntity<User> getInvestmentWealthByUserID(@PathVariable int userID) {
        Optional<User> user  = portfolioManagementService.fetchUserById(userID);
        if (user.isPresent()) {
            return new ResponseEntity<User>(user.get(), HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
