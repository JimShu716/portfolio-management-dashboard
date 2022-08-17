package com.portfolio.management.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="TradeHistory")
public class TradeHistory implements Serializable {
    //Instance variables

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="TradeHistoryID")
    private int TradeHistoryID;


    @Column(name="property")
    private String property;


    @Column(name="purchasedPrice")
    private double purchasedPrice;


    @Column(name="purchasedTime")
    private String purchasedTime;


    @Column(name="purchasedQuantities")
    private int purchasedQuantities;

    //    @ManyToOne
    @JoinColumn(name = "userID")
    private int userID;

    @Column(name="stockID")
    private int stockID;

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getProperty() {
        return property;
    }

    public void setProperty(String property) {
        this.property = property;
    }

    public TradeHistory(){}

    public TradeHistory(String property, double purchasedPrice, String purchasedTime, int purchasedQuantities, int userID, int stockID) {
        this.property = property;
        this.purchasedPrice = purchasedPrice;
        this.purchasedTime = purchasedTime;
        this.purchasedQuantities = purchasedQuantities;
        this.userID = userID;
        this.stockID = stockID;
    }

    public int getTradeHistoryID() {
        return TradeHistoryID;
    }

    public void setTradeHistoryID(int tradeHistoryID) {
        TradeHistoryID = tradeHistoryID;
    }

    public double getPurchasedPrice() {
        return purchasedPrice;
    }

    public void setPurchasedPrice(double purchasedPrice) {
        this.purchasedPrice = purchasedPrice;
    }

    public String getPurchasedTime() {
        return purchasedTime;
    }

    public void setPurchasedTime(String purchasedTime) {
        this.purchasedTime = purchasedTime;
    }

    public int getPurchasedQuantities() {
        return purchasedQuantities;
    }

    public void setPurchasedQuantities(int purchasedQuantities) {
        this.purchasedQuantities = purchasedQuantities;
    }


    public int getStockID() {
        return stockID;
    }

    public void setStockID(int stockID) {
        this.stockID = stockID;
    }
}