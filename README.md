# Install Ollama on your device if not already installed
`brew install Ollama`

# Download desired embedding model onto local machine (I used nomic-embed-text for this)
`ollama run nomic-embed-text`

# Install Node Dependencies
`npm i`

# Run Node Server and Ollama Server
`npm run dev`
- Note: This command should start both servers at the same time and end both at the same time (Ctrl+C) via the "concurrently" node dependency, allowing multiple processes to run in parallel

# View Test Results in Terminal
## Example Output
```js
[1] Nomic Embedding Test:
[1] ====================================================
[0] [GIN] 2025/02/05 - 15:32:07 | 200 |   14.522583ms |       127.0.0.1 | POST     "/api/embed"
[0] [GIN] 2025/02/05 - 15:32:07 | 200 |   13.986417ms |       127.0.0.1 | POST     "/api/embed"
[0] [GIN] 2025/02/05 - 15:32:07 | 200 |     17.2235ms |       127.0.0.1 | POST     "/api/embed"
[0] [GIN] 2025/02/05 - 15:32:07 | 200 |   13.859667ms |       127.0.0.1 | POST     "/api/embed"
[0] [GIN] 2025/02/05 - 15:32:07 | 200 |   11.975542ms |       127.0.0.1 | POST     "/api/embed"
[0] [GIN] 2025/02/05 - 15:32:07 | 200 |      13.812ms |       127.0.0.1 | POST     "/api/embed"
[0] [GIN] 2025/02/05 - 15:32:07 | 200 |   12.330458ms |       127.0.0.1 | POST     "/api/embed"
[0] [GIN] 2025/02/05 - 15:32:07 | 200 |   12.083292ms |       127.0.0.1 | POST     "/api/embed"
[1] 
[1] Rap: These should be decreasing in similarity score:
[1] ----------------------------------------------------
[1] 'rap' <-> 'rap rap rap' score:  0.8917621421229995
[1] 'rap' <-> 'rap rap pop' score:  0.8320876355917665
[1] 'rap' <-> 'rap pop pop' score:  0.7880748925874739
[1] 
[1] Pop: These should be decreasing in similarity score:
[1] ----------------------------------------------------
[1] 'pop' <-> 'pop pop pop' score:  0.8840077538600948
[1] 'pop' <-> 'rap pop pop' score:  0.812034023349454
[1] 'pop' <-> 'rap rap pop' score:  0.7336354951889118
[1] 
[1] Random Genre Comparisons:
[1] ----------------------------------------------------
[1] 'rap' <-> 'pop' score:  0.5105834481913174
[1] 'rap' <-> 'rock' score:  0.5816113967292839
[1] 'rap' <-> 'rnb' score:  0.5428660561146729
[1] ====================================================
[1] 
[1] OpenAI Embedding Test:
[1] ====================================================
[1] [nodemon] restarting due to changes...
[1] [nodemon] starting `node test.js`
[1] 
[1] Nomic Embedding Test:
[1] ====================================================
[0] [GIN] 2025/02/05 - 15:32:10 | 200 |   26.286167ms |       127.0.0.1 | POST     "/api/embed"
[0] [GIN] 2025/02/05 - 15:32:10 | 200 |      12.807ms |       127.0.0.1 | POST     "/api/embed"
[0] [GIN] 2025/02/05 - 15:32:10 | 200 |   13.935125ms |       127.0.0.1 | POST     "/api/embed"
[0] [GIN] 2025/02/05 - 15:32:10 | 200 |      13.924ms |       127.0.0.1 | POST     "/api/embed"
[0] [GIN] 2025/02/05 - 15:32:10 | 200 |   11.552916ms |       127.0.0.1 | POST     "/api/embed"
[0] [GIN] 2025/02/05 - 15:32:10 | 200 |   13.377833ms |       127.0.0.1 | POST     "/api/embed"
[0] [GIN] 2025/02/05 - 15:32:10 | 200 |   12.261042ms |       127.0.0.1 | POST     "/api/embed"
[0] [GIN] 2025/02/05 - 15:32:11 | 200 |   14.219625ms |       127.0.0.1 | POST     "/api/embed"
[1] 
[1] Rap: These should be decreasing in similarity score:
[1] ----------------------------------------------------
[1] 'rap' <-> 'rap rap rap' score:  0.8917621421229995
[1] 'rap' <-> 'rap rap pop' score:  0.8320876355917665
[1] 'rap' <-> 'rap pop pop' score:  0.7880748925874739
[1] 
[1] Pop: These should be decreasing in similarity score:
[1] ----------------------------------------------------
[1] 'pop' <-> 'pop pop pop' score:  0.8840077538600948
[1] 'pop' <-> 'rap pop pop' score:  0.812034023349454
[1] 'pop' <-> 'rap rap pop' score:  0.7336354951889118
[1] 
[1] Random Genre Comparisons:
[1] ----------------------------------------------------
[1] 'rap' <-> 'pop' score:  0.5105834481913174
[1] 'rap' <-> 'rock' score:  0.5816113967292839
[1] 'rap' <-> 'rnb' score:  0.5428660561146729
[1] ====================================================
[1] 
[1] OpenAI Embedding Test:
[1] ====================================================
[1] 
[1] Rap: These should be decreasing in similarity score:
[1] ----------------------------------------------------
[1] 'rap' <-> 'rap rap rap' score:  0.6816262728664703
[1] 'rap' <-> 'rap rap pop' score:  0.6054366565530326
[1] 'rap' <-> 'rap pop pop' score:  0.5246749492179411
[1] 
[1] Pop: These should be decreasing in similarity score:
[1] ----------------------------------------------------
[1] 'pop' <-> 'pop pop pop' score:  0.6947815097933216
[1] 'pop' <-> 'rap pop pop' score:  0.6223975601205064
[1] 'pop' <-> 'rap rap pop' score:  0.5419211626843656
[1] 
[1] Random Genre Comparisons:
[1] ----------------------------------------------------
[1] 'rap' <-> 'pop' score:  0.47436849845744317
[1] 'rap' <-> 'rock' score:  0.5395083694923576
[1] 'rap' <-> 'rnb' score:  0.4209066534730662
[1] ====================================================
```