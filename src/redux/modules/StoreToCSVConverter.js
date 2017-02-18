/**
 * Created by old on 2/17/17.
 */
import React, { Component } from 'react';
import jsonfile from 'jsonfile';
import * as fs from 'fs';




const Storebake = function (store) {

  var file = '../../Data/bake.json';
  var obj = store;

  jsonfile.writeFile(file, obj, {spaces: 2}, function(err) {
    console.error(err)
  });

};


export default Storebake;




// var json2csv = require('json2csv');
// var fields = ['field1', 'field2', 'field3'];
//
// try {
//   var result = json2csv({ data: myData, fields: fields });
//   console.log(result);
// } catch (err) {
//   // Errors are thrown for bad options, or if the data is empty and no fields are provided.
//   // Be sure to provide fields if it is possible that your data array will be empty.
//   console.error(err);
// }