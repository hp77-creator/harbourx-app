const express = require('express');
require('dotenv').config();
const { Connection, Request } = require("tedious");

const PORT = process.env.PORT || 4500;



// Custom imports
// const HospitalController = require("./Routes/HospitalRoutes");
// const PatientController = require("./Routes/PatientRoutes");

const config = {
    authentication: {
      options: {
        userName: "pushpendrahpx", // update me
        password: "Tje9CwKvrcp3aVC" // update me
      },
      type: "default"
    },
    server: "pushpendrahpx-mysql.database.windows.net", // update me
    options: {
      database: "pushpendrahpx", //update me
      encrypt: true
    }
  };
  
  const connection = new Connection(config);

  connection.on("connect", err => {
    if (err) {
      console.error(err.message);
    } else {
        console.log("Azure Database connnected")
    //   queryDatabase();
    }
  });
  
  connection.connect();
 

//   function queryDatabase() {
//     console.log("Reading rows from the Table...");
  
    // Read all rows from table
//     const request = new Request(
//       `
//       SELECT * FROM users;`,
//       (err, rowCount) => {
//         if (err) {
//           console.error(err.message);
//         } else {
//           console.log(`${rowCount} row(s) returned`);
//         }
//       }
//     );
  
//     request.on("row", columns => {
//       columns.forEach(column => {
//         console.log("%s\t%s", column.metadata.colName, column.value);
//       });
//     });
  
//     connection.execSql(request);
//   }

  









  
module.exports = {
    express,
    PORT,
    connection
}