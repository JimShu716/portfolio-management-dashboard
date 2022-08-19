package com.portfolio.management.investment.marketDataDownload;

import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;
import org.json.JSONArray;
import org.json.JSONObject;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

public class MarketData {
    String startDate;
    String endDate;
    String stockSymbol;

    public MarketData() { }

    public MarketData(String stockSymbol) {
        this.stockSymbol = stockSymbol;
    }

    public MarketData(String stockSymbol, String startDate, String endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.stockSymbol = stockSymbol;
    }

    public String getStockInfo() throws UnirestException {
        String bodySymbol = "symbol=" + stockSymbol;
        HttpResponse<String> response = Unirest.post("https://yahoo-finance97.p.rapidapi.com/stock-info")
                .header("content-type", "application/x-www-form-urlencoded")
                .header("X-RapidAPI-Key", "b477fb1a60msha44862d1aced86bp16b30bjsn5e66f649598c")
                .header("X-RapidAPI-Host", "yahoo-finance97.p.rapidapi.com")
                .body(bodySymbol)
                .asString();
        String data = response.getBody();
        return data;
    }

    public BigDecimal getCurrentPrice() throws UnirestException {
        String bodySymbol = "symbol=" + stockSymbol;
        HttpResponse<String> response = Unirest.post("https://yahoo-finance97.p.rapidapi.com/stock-info")
                .header("content-type", "application/x-www-form-urlencoded")
                .header("X-RapidAPI-Key", "b477fb1a60msha44862d1aced86bp16b30bjsn5e66f649598c")
                .header("X-RapidAPI-Host", "yahoo-finance97.p.rapidapi.com")
                .body(bodySymbol)
                .asString();
        String data = response.getBody();
        JSONObject jsonObject = new JSONObject(data);
        BigDecimal currentPrice = jsonObject.getJSONObject("data").getBigDecimal("currentPrice");
        return currentPrice;
    }

    public BigDecimal getPriceByDate() throws UnirestException {
        String bodySymbolDate = "end=" + endDate+"&symbol="+stockSymbol+"&start="+startDate;
        HttpResponse<String> response = Unirest.post("https://yahoo-finance97.p.rapidapi.com/price-customdate")
                .header("content-type", "application/x-www-form-urlencoded")
                .header("X-RapidAPI-Key", "b477fb1a60msha44862d1aced86bp16b30bjsn5e66f649598c")
                .header("X-RapidAPI-Host", "yahoo-finance97.p.rapidapi.com")
                .body(bodySymbolDate)
                .asString();
        String data = response.getBody();
        JSONObject obj = new JSONObject(data);
        JSONArray arr = obj.getJSONArray("data");
        BigDecimal price = arr.getJSONObject(0).getBigDecimal("Adj Close");
        return price;
    }

    public JSONArray getPricesByDates() throws UnirestException {
        String bodySymbolDate = "end=" + endDate+"&symbol="+stockSymbol+"&start="+startDate;
        List<BigDecimal> prices = new ArrayList<>();
        HttpResponse<String> response = Unirest.post("https://yahoo-finance97.p.rapidapi.com/price-customdate")
                .header("content-type", "application/x-www-form-urlencoded")
                .header("X-RapidAPI-Key", "b477fb1a60msha44862d1aced86bp16b30bjsn5e66f649598c")
                .header("X-RapidAPI-Host", "yahoo-finance97.p.rapidapi.com")
                .body(bodySymbolDate)
                .asString();
        String data = response.getBody();
        JSONObject obj = new JSONObject(data);
        JSONArray arr = obj.getJSONArray("data"); // notice that `"posts": [...]`
        for (int i = 0; i < arr.length(); i++)
        {
            prices.add(arr.getJSONObject(i).getBigDecimal("Adj Close"));
        }
        JSONArray jsonArray = new JSONArray(prices);
        return jsonArray;
    }
}
