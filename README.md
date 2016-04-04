# Stock Quote API
Demonstration of using markitOnDemand API to get stock quotes.

## Technology Stack
1. NodeJS
2. Express 

## Requirements
- Node
- Express
- EJS
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
