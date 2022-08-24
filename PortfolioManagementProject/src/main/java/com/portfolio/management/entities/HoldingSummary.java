package com.portfolio.management.entities;

import java.math.BigDecimal;

public class HoldingSummary {
    private String stockSymbol;
    private int Quantity;
    private BigDecimal AverageCost;
    private BigDecimal curPrice;
    private BigDecimal totalReturn;

    public HoldingSummary(String stockSymbol, int quantity, BigDecimal averageCost, BigDecimal curPrice, BigDecimal totalReturn) {
        this.stockSymbol = stockSymbol;
        Quantity = quantity;
        AverageCost = averageCost;
        this.curPrice = curPrice;
        this.totalReturn = totalReturn;
    }

    public String getStockSymbol() {
        return stockSymbol;
    }

    public void setStockSymbol(String stockSymbol) {
        this.stockSymbol = stockSymbol;
    }

    public int getQuantity() {
        return Quantity;
    }

    public void setQuantity(int quantity) {
        Quantity = quantity;
    }

    public BigDecimal getAverageCost() {
        return AverageCost;
    }

    public void setAverageCost(BigDecimal averageCost) {
        AverageCost = averageCost;
    }

    public BigDecimal getCurPrice() {
        return curPrice;
    }

    public void setCurPrice(BigDecimal curPrice) {
        this.curPrice = curPrice;
    }

    public BigDecimal getTotalReturn() {
        return totalReturn;
    }

    public void setTotalReturn(BigDecimal totalReturn) {
        this.totalReturn = totalReturn;
    }
}
