const express = require("express");

const httpGetspreadsheet = require("./spreadsheet.controller");

const spreadsheetRouter = express.Router();

spreadsheetRouter.get("/", httpGetspreadsheet);

module.exports = spreadsheetRouter;
