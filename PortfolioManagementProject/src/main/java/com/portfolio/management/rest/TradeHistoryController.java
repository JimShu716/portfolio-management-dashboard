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

    @PostMapping(value = "/addTradeHistory.rest")
    public ResponseEntity addTradeHistory(@RequestBody TradeHistory tradeHistory){
        tradeHistoryService.addTradeHistory(tradeHistory);
        return new ResponseEntity<>(tradeHistory, HttpStatus.OK);
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
}
