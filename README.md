# Stock Quote API
Demonstration of using markitOnDemand API to get stock quotes.

## How to Use
On the home page you can enter any stock symbol for which you want to get details. For example if you want to lookup 
data on Apple Computer, enter AAPL and then click the Lookup Stock button.

If you entered a valid stock symbol the details will be shown. You will see the stock name, symbol, last price,
high, low and volume.

If you entered an invalid stock symbol then you will be presented with an alert telling you this.

Everytime you lookup a stock, the details are saved in a MongDB database. At any time you can recall the details of
every stock that you have looked up by clicking on History in the navigation. This will display a table of all stocks
that you have ever looked up.

## Technology Stack
1. NodeJS
2. Express
3. Mongoose

## Requirements
- Node
- Express
- EJS
- Bootstrap
- Mongoose
- Gulp
- Wiredep
 
## Installation
```bash
git clone git@github.com:ratracegrad/Stock_Quote_API.git
mpm install
bower install
gulp serve

open your brower to http://localhost:3000
```

## Live Demonstration
[You can view this app in production here](https://stockwatchapi.herokuapp.com/)

## Screenshots
Home page for stock Watch API
![Homepage](/screenshots/home.png?raw=true "homepage")

If you do a lookup for Apple, Computer you will get this result.
![Homepage](/screenshots/stockDetails.png?raw=true "homepage")

If you want to see the values for every stock you have looked up, this will be displayed on the history page.
![History Page](/screenshots/history.png?raw=true "history page")

## Gulp Commands
This application uses Gulp. Gulp is used for running jslint and jscs for code review and meeting coding standards. Gulp is also used to inject scripts, stylesheets and application dependencies using wiredep. You can use Gulp to start the server.

Here are the Gulp commands available in this application
```bash
gulp style
```
Gulp style whill run jshint for code review.

```bash
gulp inject
```
gulp inject will insert all dependencies for css, images, and javascript into the html file.

```bash
gulp serve
```
gulp serve will run gulp inject and gulp style. If both of these pass, it will start the server.
