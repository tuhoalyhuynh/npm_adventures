const moment = require("moment");

const today = moment();
console.log(today.format("dddd"));

const oneMonthFromNow = moment().add(1, "month")
console.log(oneMonthFromNow.format("Do MMMM YY"))