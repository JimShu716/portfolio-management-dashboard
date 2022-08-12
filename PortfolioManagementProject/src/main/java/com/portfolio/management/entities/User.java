package com.portfolio.management.entities;

import javax.persistence.*;

@Entity
@Table(name="userAccount")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="stockID")
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
}
