const inputEl = document.getElementById("input");
const infoTxt = document.getElementById("infoText");
const meaningEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meanEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

async function ftechAPI(word){
    try {
        infoTxt.style.display = "block";
        meaningEl.style.display = "none";
        infoTxt.innerHTML = `Searching the meaning of "${word}"`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());

        infoTxt.style.display = "none";
        meaningEl.style.display = "block";
        titleEl.innerHTML = result[0].word;
        meanEl.innerHTML = result[0].meanings[0].definitions[0].definition;
        audioEl.src = result[0].phonetics[0].audio;

    } catch (error) {
        console.log(error);
    }
}

inputEl.addEventListener("keyup", (e) => {
    if(e.target.value && e.key === "Enter"){
        ftechAPI(e.target.value);
    }
})

