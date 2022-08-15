package com.portfolio.management.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="userAccount")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="email")
    private String email;

    @Column(name="userName")
    private String userName;

    @Column(name="userPassword")
    private String userPassword;


    public User(String email, String userName, String userPassword) {
        this.email = email;
        this.userName = userName;
        this.userPassword = userPassword;
    }

    public User() {}

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

    //@OneToMany( cascade={CascadeType.MERGE, CascadeType.PERSIST})

    @OneToMany(mappedBy = "user", targetEntity = TradeHistory.class, fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
    private List<TradeHistory> TradeHistories = new ArrayList<TradeHistory>();
}
