/********************************************************************
* @Execution    : Desktop/Pradeep/FelloshipJavaScript/oops/StockReport.js
* @description  : this program is to read in Stock Names, Number of Share, Share Price and return the value
* @overview     : oops concepts
* @file         : stockReport.js
* @author       : GIRISH B R
* @since        : 14-11-2019
*
*********************************************************************/
//import file
const util = require('./stockReportBlogic.js');
//create instance and store it in obj
var obj = new util();
//import json file
obj.jsonParse('./stockManagement.json');
//call functions
obj.display();
obj.totalValue();
