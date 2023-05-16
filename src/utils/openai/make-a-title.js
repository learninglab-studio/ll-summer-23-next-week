import dynamic from 'next/dynamic';



const makeATitle = async (prompt) => {
    const OpenAIApi = dynamic(() => import('openai').then((module) => module.OpenAIApi), {
        ssr: false, // Disable server-side rendering for this component
      });
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
//   });
  
//   const openai = new OpenAIApi(configuration);
//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: prompt,
//     temperature: 0,
//     max_tokens: 7,
//   });
// console.log(JSON.stringify(response.body, null, 4))
// console.log("and data")
// console.log(JSON.stringify(response.body, null, 4))

// return ({
//     text: `openai request to come`, 
//     openaiResponse: response.body
// })
    return( {
        text: "open ai response here"
    })

}

export default makeATitle