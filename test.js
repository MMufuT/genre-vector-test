/**
 * Goal:
 * - comparing "rap" with "rap rap rap", should have a higher score than:
 * - comparing "rap" with "rap rap pop" or "pop" or "rock"
*/

const createOpenAIEmbedding = require('./create_openai_embedding');
const similarity = require( 'compute-cosine-similarity' );
const createNomicEmbedding = require('./create_nomic_embedding');

const genreTest = async (testEmbeddingFunc) => {
    const rap = await testEmbeddingFunc("rap");
    const rapX3 = await testEmbeddingFunc("rap rap rap");
    const rapX2popX1 = await testEmbeddingFunc("rap rap pop");
    const rapX1popX2 = await testEmbeddingFunc("rap pop pop");
    const pop = await testEmbeddingFunc("pop");
    const popX3 = await testEmbeddingFunc("pop pop pop");
    const rock = await testEmbeddingFunc("rock");
    const rnb = await testEmbeddingFunc("r&b");

    console.log("\nRap: These should be decreasing in similarity score:");
    
    console.log("----------------------------------------------------")
    console.log("'rap' <-> 'rap rap rap' score: ", similarity(rap, rapX3));
    console.log("'rap' <-> 'rap rap pop' score: ", similarity(rap, rapX2popX1));
    console.log("'rap' <-> 'rap pop pop' score: ", similarity(rap, rapX1popX2));

    console.log("\nPop: These should be decreasing in similarity score:");
    console.log("----------------------------------------------------")
    console.log("'pop' <-> 'pop pop pop' score: ", similarity(pop, popX3));
    console.log("'pop' <-> 'rap pop pop' score: ", similarity(pop, rapX1popX2));
    console.log("'pop' <-> 'rap rap pop' score: ", similarity(pop, rapX2popX1));
    
    console.log("\nRandom Genre Comparisons:");
    console.log("----------------------------------------------------")
    console.log("'rap' <-> 'pop' score: ", similarity(rap, pop));
    console.log("'rap' <-> 'rock' score: ", similarity(rap, rock));
    console.log("'rap' <-> 'rnb' score: ", similarity(rap, rnb));
}

// anonymous function so we can use await on genreTest
(async () => {
    console.log("\nNomic Embedding Test:");
    console.log("====================================================")
    await genreTest(createNomicEmbedding);
    console.log("====================================================")
    
    console.log("\nOpenAI Embedding Test:");
    console.log("====================================================")
    await genreTest(createOpenAIEmbedding);
    console.log("====================================================")

})()
