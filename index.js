const inputEl = document.getElementById("input");
const infoTxt = document.getElementById("infoText");

async function ftechAPI(word){
    try {
        infoTxt.style.display = "block";
        infoTxt.innerHTML = `Searching the meaning of "${word}"`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());

        infoTxt.style.display = "none";
    } catch (error) {
        console.log(error);
    }
    
    
}

inputEl.addEventListener("keyup", (e) => {
    if(e.target.value && e.key === "Enter"){
        ftechAPI(e.target.value);
    }
})

