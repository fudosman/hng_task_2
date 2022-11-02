const request=require('request')
const csv=require('csvtojson')
 
csv()
.fromStream(request.get('https://docs.google.com/spreadsheets/d/1-9zf50iUmdtvpbEvQ7I-M2vlK8hCSB1DC_bF5bDNjxE/edit#gid=663257143'))
.subscribe((json)=>{
    return new Promise((resolve,reject)=>{
        // long operation for each json e.g. transform / write into database.
        console.log(json)
    })
});