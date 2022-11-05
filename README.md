# CSV READER AND WRITER

This is a HNGi9 Project I submitted that reads a csv file, saves out each row as a json file, hashes the json files and creates a modified csv file with the new hash for each row included in the row.

> **Note:** This Script works with csv files that have the following headers - [ "TEAM NAMES", "Series Number", "Filename", "Name", "Description", "Gender", "Attributes", "UUID"].

To add new columns, Just edit the `columns` array and add the new column in the right place.

# STRUCTURE

- the `csv_files` folder contains the original csv file and the modified version. Copy your csv file into this folder
- the `index.js` houses the implementation.

# HOW TO RUN THE PROGRAM

- Clone the repo
- Change into the cloned directory
- In your terminal run `npm install` to install the dependencies
- copy the csv file into the csv_files folder
- In the `index.js` file, change the `csvFilePath` variable to your csv file path. 
- In your terminal run `node main.js`
