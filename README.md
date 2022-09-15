
<!--
Template taken from
https://github.com/othneildrew/Best-README-Template/blob/master/README.md
-->
<!-- PROJECT LOGO -->

<div id="top"></div>
<!-- PROJECT LOGO -->

<br />
<p align="center">

  <h1 align="center">Portfolio Management Web APP</h1>

  <p align="center">
    Stock Trading APP
    <br />
    <br />
    <a href="https://github.com/Kristen6765/portfolio-management-dashboard/tree/main/PortfolioManagementProject">Back-End</a>
    ·
    <a href="https://github.com/Kristen6765/portfolio-management-dashboard/tree/main/frontend">Front-End</a>
  </p>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#login-page">Login Page</a>
    </li>
    <li>
      <a href="#trading-page">Trading Page</a>
    </li>
    <li>
      <a href="#portfolio-page">Portfolio Page</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
   
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
It is portfolio management system that are able to facilitate the buy and sell of stocks.

### Tech Stacks:
* Backend: Java, Spring Boot
* Data: MySQL, Yahoo Stock API
* Frontend: React, JavaScript, CSS
* Middleware: Axios
* Deployment: Docker, Jenkins, Openshift

### Architecture 
<img src="/img/app-architecture.png"  width = "600x">
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Login Page -->
## Login Page

![Zoom](/img/login.png)
* Enable user to creat account and login
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- Trading Page -->
## Trading Page

![Zoom](/img/tradingPage.png)
* Enable user to transfer money from Visa Card
* Enable user to withdraw money from account
* Enable user to search the real-time info about a stock (ex, Apple)
* Enable user to Sale/Buy stocks

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- Portfolio Page -->
## Portfolio Page

![Zoom](/img/portfolio.png)
* Display user's trade history
* Display user's net value of the current hodling stocks
* Display return(gain/lost) of each type of stock the user is holding
  
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Getting Started -->
## Getting Started
The following steps show how to test it on the Chrome browser. You don't need to connect to the back-end for testing it.

1. Clone the repo
   ```sh
   https://github.com/Kristen6765/portfolio-management-dashboard
   ```
2. Establish MySQL 
   Install MySQL and run this [script](https://github.com/Kristen6765/portfolio-management-dashboard/blob/main/PortfolioManagementProject/src/main/database/databaseCreation.sql) to create the database.
3. Start Server (Back-End)
   Run the [AppConfig class](https://github.com/Kristen6765/portfolio-management-dashboard/blob/main/PortfolioManagementProject/src/main/java/com/portfolio/management/AppConfig.java).
4. Start Front-End
   ```sh
   npm install
   ```
   ```sh
   npm start
   ```





<p align="right">(<a href="#top">back to top</a>)</p>
