import { Configuration, OpenAIApi } from "openai"
import * as dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// TODO: - Add powers
export default async function story(name, isHero, alias, typeBeing) {

    let response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: createQuestion(name, isHero, alias, typeBeing),
        temperature: 0.9,
        max_tokens: 250,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
    });

    return response.data.choices[0].text
}

function createQuestion(name, isHero, alias, typeBeing) {
    let type = isHero ? "Hero" : "Villian"
    let namePhrase = "The name is" + name + ". "
    let aliasPhrase = "The alias of " + name + " is " + alias + ". "
    let typeBeingPhrase = name + " is a " + typeBeing + "."
    let limitPhrase = "The story should not exceed 200 words."

    return "Create origin story about a " + type + namePhrase + aliasPhrase + typeBeingPhrase + limitPhrase
}