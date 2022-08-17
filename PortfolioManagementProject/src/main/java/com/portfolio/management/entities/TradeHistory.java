package com.portfolio.management.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="TradeHistoryID")
public class TradeHistory implements Serializable {
    //Instance variables

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="TradeHistoryID")
    private int TradeHistoryID;

    @Column(name="purchasedPrice")
    private double purchasedPrice;

    @Column(name="purchasedTime")
    private String purchasedTime;


    @Column(name="purchasedQuantities")
    private int purchasedQuantities;

//    @ManyToOne
//    @JoinColumn(name = "userID")
//    private User user;

    @Column(name="stockID")
    private int stockID;

    public TradeHistory(){}

    public TradeHistory(int tradeHistoryID, double purchasedPrice, String purchasedTime, int purchasedQuantities, /*User user,*/ int stockID) {
        TradeHistoryID = tradeHistoryID;
        this.purchasedPrice = purchasedPrice;
        this.purchasedTime = purchasedTime;
        this.purchasedQuantities = purchasedQuantities;
//        this.user = user;
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

//    public User getUser() {
//        return user;
//    }
//
//    public void setUser(User user) {
//        this.user = user;
//    }

    public int getStockID() {
        return stockID;
    }

    public void setStockID(int stockID) {
        this.stockID = stockID;
    }
}