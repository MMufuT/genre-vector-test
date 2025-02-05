// Creates an embedding (768 unit array) for the input text using nomic-embed-text API
const createNomicEmbedding = async (input) => {
    const response = await fetch('http://localhost:11434/api/embed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            model: 'nomic-embed-text',
            input: input
        })
    });

    const data = await response.json();
    //console.log(data.embeddings[0]);
    return data.embeddings[0];
}

module.exports = createNomicEmbedding;