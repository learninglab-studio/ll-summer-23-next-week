import Airtable from "airtable";

const addRecord = async function({ apiKey, baseId, table, record }){
    var base = new Airtable({apiKey: apiKey}).base(baseId);
    var airtableResult = await base(table).create(record).then(result => {
      console.log("saved to airtable");
      return result;
    })
      .catch(err => {
        console.log("\nthere was an error with the attempt to create Airtable record with this data:\n");
        console.log(JSON.stringify(record, null, 4))
        console.error(err);
        return;
      });
    return airtableResult;
  }

export default addRecord