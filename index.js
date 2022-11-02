const csv = require("csvtojson");
const sha256 = require("js-sha256").sha256;


const csvFilePath =
  "/home/assocmaster/Desktop/CODES/HNG/Task_2/csv_files/NFT Naming csv - Team Clutch.csv";


async function convertFile(csvFilePath) {
  const jsonArray = await csv().fromFile(csvFilePath);
  // console.log(jsonArray);
  jsonArray.forEach((record) => {
    const sha256_for_each_row = sha256(record.UUID);
    record[`${record.Filename}.sha256.csv`] = sha256_for_each_row;
    console.log(record);
  });
  console.log(jsonArray);
}

convertFile(csvFilePath);
