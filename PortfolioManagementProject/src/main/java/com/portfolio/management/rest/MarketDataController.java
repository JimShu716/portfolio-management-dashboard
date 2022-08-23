package com.portfolio.management.rest;

import com.mashape.unirest.http.exceptions.UnirestException;
import com.portfolio.management.entities.User;
import com.portfolio.management.investment.marketDataDownload.MarketData;
import com.portfolio.management.services.PortfolioManagementService;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Optional;

@RestController
@CrossOrigin // allows requests from all domains
public class MarketDataController {

    @GetMapping(value = "/getStockInfo/{stockSymbol}")
    public ResponseEntity getStockInfo(@PathVariable String stockSymbol) {
        MarketData marketData = new MarketData(stockSymbol);
        String stockInfo;
        try {
            stockInfo = marketData.getStockInfo();
            System.err.println("current api call cnt: "+marketData.getApiCallCnt());
            return new ResponseEntity<>(stockInfo, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @GetMapping(value = "/getStockCurrentPrice/{stockSymbol}")
    public ResponseEntity getStockCurrentPrice(@PathVariable String stockSymbol) {
        MarketData marketData = new MarketData(stockSymbol);
        BigDecimal stockInfo;
        try {
            stockInfo = marketData.getCurrentPrice();
            System.err.println("current api call cnt after getStockCurrentPrice: "+marketData.getApiCallCnt());
            return new ResponseEntity<>(stockInfo, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(value = "/getStockPriceForADate/{stockSymbol}/{startDate}/{endDate}")
    public ResponseEntity getStockPriceForADate(@PathVariable String stockSymbol, @PathVariable String startDate, @PathVariable String endDate) {
        MarketData marketData = new MarketData(stockSymbol, startDate, endDate);
        BigDecimal stockInfo;
        try {
            stockInfo = marketData.getPriceByDate();
            System.err.println("current api call cnt after getStockPriceForADate: "+marketData.getApiCallCnt());
            return new ResponseEntity(stockInfo, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping(value = "/getStockPriceForADates/{stockSymbol}/{startDate}/{endDate}")
    public ResponseEntity getStockPriceForADates(@PathVariable String stockSymbol, @PathVariable String startDate, @PathVariable String endDate) {
        MarketData marketData = new MarketData(stockSymbol, startDate, endDate);
        JSONArray stockInfo;
        try {
            stockInfo = marketData.getPricesByDates();
            System.err.println("current api call cnt after getStockPriceForADates: "+marketData.getApiCallCnt());
            return new ResponseEntity<>(stockInfo, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
