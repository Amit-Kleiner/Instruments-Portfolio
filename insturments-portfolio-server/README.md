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