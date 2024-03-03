const OpenAI=require("openai"),openai=new OpenAI({apiKey:process.env.OPENAI_API_KEY});module.exports=async(e,o)=>{if("POST"===e.method)try{const e=await openai.chat.completions.create({model:"gpt-3.5-turbo-0125",temperature:1,max_tokens:20,frequency_penalty:1,presence_penalty:1,top_p:.9,messages:[{role:"user",content:"Write death haiku"}]});o.json({haiku:e.choices[0].message.content})}catch(e){console.error("OpenAI API error:",e.response?e.response.data:e.message),o.status(500).json({error:"Error generating haiku"})}else o.setHeader("Allow",["POST"]),o.status(405).end(`Method ${e.method} Not Allowed`)};