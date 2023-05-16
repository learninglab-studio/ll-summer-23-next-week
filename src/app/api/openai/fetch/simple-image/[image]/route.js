import addRecord from "@/utils/airtable/add-record";
import longTimestamp from "@/utils/time/long-timestamp";
import { NextResponse } from "next/server"



export async function GET(req, context) {
    const apiKey = process.env.OPENAI_API_KEY;
    const apiUrl = 'https://api.openai.com/v1/images/generations';
  
    const prompt = context.params.image
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      })
    };
  
    try {
      const response = await fetch(apiUrl, requestOptions);
      const data = await response.json();
      // Handle the response data
    //   res.status(200).json(data);
      const airtableResult = await addRecord({
        apiKey: process.env.AIRTABLE_API_KEY,
        baseId: process.env.AIRTABLE_SUMMER_23_BASE,
        table: "OpenAiImages",
        record: {
          Name: `${longTimestamp()}-${prompt}`,
          Json: JSON.stringify(data),
          ImageFile: [
            {
              "url": data.data[0].url
            }
          ],
          InitialImageUrl: data.data[0].url,
          Prompt: prompt
        }
      })
      return NextResponse.json({
        text: `image to come`, 
        openaiData: data, 
        airtableData: airtableResult
        // name: context.params.name
    })
    } catch (error) {
      // Handle any errors
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred' });
    }
  }
  