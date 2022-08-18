package com.portfolio.management.rest;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.portfolio.management.entities.User;
import com.portfolio.management.investment.marketDataDownload.MarketData;
import com.portfolio.management.services.PortfolioManagementService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin // allows requests from all domains
public class MarketDataController {

//    @GetMapping(value = "/getStockInfo/{stockSymbol}")
//    public JSONObject getTradeHistoryWithID(@PathVariable String stockSymbol) {
//        MarketData marketData = new MarketData(stockSymbol);
//        JSONObject stockInfo;
//        try {
//            stockInfo = marketData.getStockInfo();
//        } catch (UnirestException e) {
//            throw new RuntimeException(e);
//        }
//        return stockInfo;
//    }

    @GetMapping(value = "/getStockInfo/{stockSymbol}")
    public ResponseEntity getStockInfo(@PathVariable String stockSymbol) {
        MarketData marketData = new MarketData(stockSymbol);
        String stockInfo;
        try {
            stockInfo = marketData.getStockInfo();
            return new ResponseEntity<>(stockInfo, HttpStatus.OK);
        } catch (UnirestException e) {
            throw new RuntimeException(e);
        }

    }

}
