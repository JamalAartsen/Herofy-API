import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export default async function story(name, isHero, alias, typeBeing) {
    let type = isHero ? "Hero" : "Villian"

    let response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Create story about a " + type + ". The name is " + name + " and the alias is " + alias + ". He is a " + typeBeing,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
    });

    return response.data.choices[0].text
}