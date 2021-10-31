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
        userName: process.env.AZURE_USERNAME, // update me
        password: process.env.AZURE_PASSWORD // update me
      },
      type: "default"
    },
    server: process.env.AZURE_SERVER_HOST, // update me
    options: {
      database: process.env.AZURE_DB_SELECTED, //update me
      encrypt: true
    }
  };
  
  const connection = new Connection(config);

  connection.on("connect", err => {
    if (err) {
      console.error(err.message);
    } else {
        console.log("Azure Database connnected")
      // queryDatabase(`
      // SELECT TOP 3 * FROM users;`,(r)=>{
      //   console.log("TEST"+r)
      // });
    }
  });
  
  connection.connect();
 

  async function insertDB(query,callb) {
    console.log("INSERTING iNTO DB");
    // let newData= [];
    return new Promise((reject,resolve)=>{
        
            let allData = []
              const request = new Request(
                query,
                (err, rowCount,rows) => {
                  if (err) {
                    console.error(err.message);
                    let da = {status: false,data:null,rowCount:null}
                    // callb(da);
                    // return reject(da);
                  } else {
                    console.log(`${rowCount} row(s) returned`);
                    // console.log(newData)
                    let da = {status: true,data:null,rowCount:null}
                    // callb(da);
                    // return resolve(da);
                  }
                }
              );

              request.on("row", columns => {
                let obj = {}
                let i =0;
                while(i < columns.length){
                  let column = columns[i];
                  obj[column.metadata.colName] = column.value;
        
                  i++;
                }
        
                allData.push(obj);
        
              });
              request.on("requestCompleted",(rowCount,more,returnStatus)=>{
                console.log("REQUEST_COMPLEYED")
                // console.log(allData)
                callb(allData);
              })
      
              // request.on("row", columns => {
              //   // console.log(columns)
              //   let i= 0;
              //   while(i < columns.)
              //   columns.forEach(column => {
              //     newData.push({[column.metadata.colName] : column.value});
              //     // console.log("%s\t%s", column.metadata.colName, column.value);
                  
              //   });
              //   console.log
              //   callb(newData);
              //   return resolve();
              // });
              // request.on("done", function (rowCount, more) {
              //     console.log("DONE CALLED")
              // });
            
              connection.execSql(request);
          
    })
  }

  
  async function loginDB(query,callb) {
    // console.log("LOGIN QUERY");
    return new Promise(async (reject,resolve)=>{
        
                  // Read all rows from table
                let allData = []
              const request = new Request(
                query,
                (err, rowCount,rows) => {
                    if (err) {
                      console.error(err.message);
                    } 
                   
                    // console.log(`${rowCount} row(s) returned`);
                    if(rowCount>0){
                        // console.log("DONE CALLED")
                        let da  = {status: true,data:rows,rowCount:rowCount}
                        // callb(da);
                        // return resolve();
                    }else{
                        // console.log("FAILED CALLED")
                        // console.log(rows)
                        let da  = {status: false,data:null,rowCount:rowCount}
                        // callb(da);
                        // return reject();
                    }
                  
                }
              );
              request.on("row", columns => {
                let obj = {}
                let i =0;
                while(i < columns.length){
                  let column = columns[i];
                  obj[column.metadata.colName] = column.value;
        
                  i++;
                }
        
                allData.push(obj);
        
              });
        
              request.on("doneProc",(rowCount,more,returnStatus)=>{
                console.log("DONEPROC")
                callb(allData);
              })
        
              connection.execSql(request);
          
    })
  }

  async function selectDB(query,callb){
    return new Promise((resolve,reject)=>{
      let allData = []
      const request = new Request(
        query,
        (err,rowCount,rows)=>{
          if(err) {console.log(err); return;}

          console.log(rowCount,rows)

        }
      );

      request.on("row", columns => {
        let obj = {}
        let i =0;
        while(i < columns.length){
          let column = columns[i];
          obj[column.metadata.colName] = column.value;

          i++;
        }

        allData.push(obj);

      });

      request.on("doneProc",(rowCount,more,returnStatus)=>{
        console.log("DONEPROC")
        callb(allData);
      })


      connection.execSql(request);
    })
  }







  
module.exports = {
    express,
    PORT,
    AzureSQLConnection:connection,
    insertDB,
    loginDB,
    selectDB
}