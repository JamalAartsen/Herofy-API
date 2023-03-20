import { Configuration, OpenAIApi } from "openai"
import * as dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// TODO: - Add powers
export default async function story(name, isHero, alias, typeBeing) {
    let type = isHero ? "Hero" : "Villian"

    let response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Create origin story about a " + type + ". The name is " + name + " and the alias is " + alias + ". He is a " + typeBeing,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
    });

    return response.data.choices[0].text
}