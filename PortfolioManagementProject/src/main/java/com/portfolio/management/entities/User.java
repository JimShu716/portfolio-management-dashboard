package com.portfolio.management.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="userAccount")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userID;

    @Column(name="email")
    private String email;

    @Column(name="userName")
    private String userName;

    @Column(name="userPassword")
    private String userPassword;


    public User(int userID, String email, String userName, String userPassword) {
        this.userID = userID;
        this.email = email;
        this.userName = userName;
        this.userPassword = userPassword;
    }

    public User(int userID, String userPassword) {
        this.userID = userID;
        this.userPassword = userPassword;
    }

    public User() {}


    @OneToMany(mappedBy = "userID", targetEntity = TradeHistory.class, cascade={CascadeType.ALL})
    private List<TradeHistory> TradeHistories = new ArrayList<TradeHistory>();

    public int getUserID() {
        return userID;
    }

    public void setUserID(int userID) {
        this.userID = userID;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public List<TradeHistory> getTradeHistories() {
        return TradeHistories;
    }

    public void setTradeHistories(List<TradeHistory> tradeHistories) {
        TradeHistories = tradeHistories;
    }
}
