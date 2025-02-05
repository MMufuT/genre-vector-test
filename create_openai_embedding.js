require('dotenv').config()
const OpenAI = require('openai');  // Import the OpenAI module

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY  // Ensure API key is loaded from .env
});

// Creates an embedding (1536 unit array) for the input text using OpenAI API
const createOpenAIEmbedding = async (input) => {
    const embedding = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: input,
        encoding_format: "float",
      });
      
      return embedding.data[0].embedding;
  }

module.exports = createOpenAIEmbedding;