package com.portfolio.management.entities;

import javax.persistence.*;

@Entity
@Table(name="TradeHistoryID")
public class TradeHistory {
    //Instance variables

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="TradeHistoryID")
    private String TradeHistoryID;

    @Column(name="purchasedPrice")
    private double purchasedPrice;

    @Column(name="purchasedTime")
    private String purchasedTime;


    @Column(name="purchasedQuantities")
    private int purchasedQuantities;

    @Column(name="email")
    private String email;

    @Column(name="stockID")
    private int stockID;

    public TradeHistory(){}

    public TradeHistory(String tradeHistoryID, double purchasedPrice, String purchasedTime, int purchasedQuantities, String email, int stockID) {
        TradeHistoryID = tradeHistoryID;
        this.purchasedPrice = purchasedPrice;
        this.purchasedTime = purchasedTime;
        this.purchasedQuantities = purchasedQuantities;
        this.email = email;
        this.stockID = stockID;
    }

    public void setTradeHistoryID(String tradeHistoryID) {
        TradeHistoryID = tradeHistoryID;
    }

    public void setPurchasedPrice(double purchasedPrice) {
        this.purchasedPrice = purchasedPrice;
    }

    public void setPurchasedTime(String purchasedTime) {
        this.purchasedTime = purchasedTime;
    }

    public void setPurchasedQuantities(int purchasedQuantities) {
        this.purchasedQuantities = purchasedQuantities;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setStockID(int stockID) {
        this.stockID = stockID;
    }
}
