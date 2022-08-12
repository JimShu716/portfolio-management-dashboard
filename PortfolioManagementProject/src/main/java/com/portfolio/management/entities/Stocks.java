package com.portfolio.management.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="stock")
public class Stocks implements Serializable {

    public Stocks () {
    }

    public Stocks (int stockID, String stockName) {
        this.stockID = stockID;
        this.stockName = stockName;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="stockID")
    private Integer stockID;


    @Column(name="stockName")
    private String stockName;



}
