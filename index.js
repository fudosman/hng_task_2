const csv = require("csvtojson");
const sha256 = require("js-sha256").sha256;
const jsonToCSV = require('json-to-csv');

const csvFilePath =
  "/home/assocmaster/Desktop/CODES/HNG/Task_2/csv_files/NFT Naming csv - Team Clutch.csv";

async function convertFile(csvFilePath) {
  // converts csv file to json
  const jsonArray = await csv().fromFile(csvFilePath);
  // console.log(jsonArray);

  jsonArray.forEach((record) => {
    // hash each record
    console.log(record)
    const sha256_for_each_row = sha256(record.UUID);

    // append the hash to each record
    record[`record.Filename}.sha256.csv`] = sha256_for_each_row;
  });
  console.log(jsonArray);
  const fileName = csvFilePath.split("/")[8].split(".")[0];
  const newCSV = `${fileName}.sha256.csv`;
  // console.log(newCSV)
  const new_csv_file = jsonToCSV(jsonArray,newCSV);
  // console.log(new_csv_file);

  return jsonArray;
}

convertFile(csvFilePath);
