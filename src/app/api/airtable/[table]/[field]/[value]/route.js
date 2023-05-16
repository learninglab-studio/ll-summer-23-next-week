import { NextResponse } from "next/server"
import Airtable from "airtable"

const findRecordByValue = async ({ table, field, value, view }) => {
    var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_SUMMER_23_BASE);
    const theRecords = [];
    await base(table).select({
        maxRecords: 1,
        view: view ? view : "Grid view",
        filterByFormula: `${field}='${value}'`
    }).eachPage(function page(records, next){
        theRecords.push(...records);
        next()
      })
      // .then(()=>{
      //   // return(theRecords);
      // })
      .catch(err=>{console.error(err); return})
    // console.log(JSON.stringify(theRecords))
    return theRecords[0];
}

const findRecordsByValue = async ({ table, field, value, view }) => {
    var base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY}).base(process.env.AIRTABLE_SUMMER_23_BASE);
    const theRecords = [];
    await base(table).select({
        maxRecords: 100,
        view: view ? view : "Grid view",
        filterByFormula: `${field}='${value}'`
    }).eachPage(function page(records, next){
        theRecords.push(...records);
        next()
      })
      // .then(()=>{
      //   // return(theRecords);
      // })
      .catch(err=>{console.error(err); return})
    // console.log(JSON.stringify(theRecords))
    return theRecords;
}

export async function GET(request, context) {
    console.log(`getting a request at /api/airtable`)
    console.log(JSON.stringify(context.params, null, 4))
    const airtableResult = await findRecordByValue({
        view: "MAIN",
        table: context.params.table,
        field: context.params.field,
        value: context.params.value
    })
    return NextResponse.json({
        text: `airtable request to come`, 
        parameters: context.params, 
        // searchParameters:request.nextUrl.searchParams.get('test'),
        table: context.params.table,
        field: context.params.field,
        value: context.params.value,
        airtableRecord: airtableResult
    })
}