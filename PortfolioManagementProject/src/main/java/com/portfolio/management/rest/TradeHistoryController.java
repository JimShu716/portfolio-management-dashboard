package com.portfolio.management.rest;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.portfolio.management.entities.HoldingSummary;
import com.portfolio.management.entities.TradeHistory;
import com.portfolio.management.entities.User;
import com.portfolio.management.services.PortfolioManagementService;
import com.portfolio.management.services.TradeHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
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
        String stockSymbol = tradeHistory.getStockSymbol();
        int purchasedQuantities = tradeHistory.getPurchasedQuantities();
        BigDecimal curBalance = portfolioManagementService.getBalance(userID);
        BigDecimal quantity = (BigDecimal.valueOf(tradeHistory.getPurchasedQuantities()));
        BigDecimal transactionMoney = tradeHistory.getPurchasedPrice().multiply(quantity);
        if (propperty.equals("buy")) {
            if (curBalance.compareTo(transactionMoney) > 0) { //curBalance>transactionMoney
                // add this record to TradeHistory table
                tradeHistoryService.addTradeHistory(tradeHistory);

                // update the curBalance in the User table
                curBalance = curBalance.subtract(transactionMoney);
                User user = portfolioManagementService.updateUserBalance(userID, curBalance);
                return new ResponseEntity<>(user, HttpStatus.OK);
            } else {
                return ResponseEntity.status(HttpStatus.FORBIDDEN)
                        .body("Insufficient Balance, transaction is forbidden");
            }

        } if (propperty.equals("sale")) {
            int holdingStockQuantities = tradeHistoryService.getHoldingStockQuantities(userID, stockSymbol);
            if (purchasedQuantities <= holdingStockQuantities) {
                // add this record to TradeHistory table
                tradeHistoryService.addTradeHistory(tradeHistory);

                // update the curBalance in the User table
                curBalance = curBalance.add(transactionMoney);
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
    public ResponseEntity<User> getInvestmentWealthByUserID(@PathVariable int userID) throws UnirestException {
        BigDecimal wealth = tradeHistoryService.getCurrentWealth(userID);
        return new ResponseEntity(wealth, HttpStatus.OK);
    }

    @GetMapping(value = "/holdingSummaryPerStockUser/{userID}/{stockSymbol}")
    public ResponseEntity<HoldingSummary> getHoldingSummaryPerStockUser(@PathVariable int userID, @PathVariable String stockSymbol) throws UnirestException {
        HoldingSummary holdingSummary = tradeHistoryService.getHoldingSummaryPerStockUser(userID, stockSymbol);
        System.err.println(holdingSummary.getAverageCost());
        return new ResponseEntity(holdingSummary, HttpStatus.OK);
    }
}
