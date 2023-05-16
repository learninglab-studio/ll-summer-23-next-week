import { Configuration, OpenAIApi } from "openai"

const openAiTest = async (data) => {

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  
  const openai = new OpenAIApi(configuration);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Say this is a test",
    temperature: 0,
    max_tokens: 7,
  });
console.log(JSON.stringify(response.body, null, 4))
console.log("and data")
console.log(JSON.stringify(response.body, null, 4))

return ({
    text: `openai request to come`, 
    openaiResponse: response.body
})
}

export default openAiTest