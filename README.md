# Instruments-Portfolio

# InstrumentsPortfolio Server

This is a REST API server that handle the following requests:

> http://localhost:8080/instruments 
- a get request that returns all existing instruments
- a post request with an Instrument JSON that writes it to the db, in the following structue:
{
    name: "",
	symbol: "",
	instrumentType: ""
}

the server generates a random id.

> http://localhost:8080/instruments:instrumentId
- a delete request with the instrument id to delete

I used a MySQL as a DB

In order to run the server you need to have node js installed and run "npm start".
The server will run on port 3000.

# InstrumentsPortfolioClient

This is the client that enables the user to do the following:

- see all instruments
- search for an instrument
- delete an instrument
- create a new instrument

I used angular-material for the styling.

In order to run this app you have to do the following:
1) Clone it to your workspace
2) run npm install
3) run npm start
4) open the browser with url: http://localhost:4200 