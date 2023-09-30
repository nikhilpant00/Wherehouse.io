const express = require("express");

const spreadsheetRouter = require("./spreadsheet/spreadsheet.router");

const api = express.Router();

api.use("/spreadsheet", spreadsheetRouter);

module.exports = api;
