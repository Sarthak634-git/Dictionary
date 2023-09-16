// Get references to HTML elements by their IDs
const inputEl = document.getElementById("input");
const infoTxt = document.getElementById("infoText");
const meaningEl = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meanEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

//// Define an asynchronous function to fetch word information from an API
async function ftechAPI(word){
    try {
         // Display "Searching..." message and hide meaning container initially
        infoTxt.style.display = "block";
        meaningEl.style.display = "none";
        infoTxt.innerHTML = `Searching the meaning of "${word}"`

        // Construct the API URL based on the user's input
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        //fetch data from API
        const result = await fetch(url).then((res) => res.json());

        // Check if the result has a 'title' property (word not found in dictionary)
        if(result.title){
            // Display appropriate messages and hide audio element
            meaningEl.style.display = "block";
            titleEl.innerHTML = word;
            meanEl.innerHTML = "N/A";
            audioEl.style.display = "none"; 

            // Word found in dictionary, display its title, meaning, and audio pronunciation
        }else{
            infoTxt.style.display = "none";
            meaningEl.style.display = "block";
            audioEl.style.display = "inline-flex";
            titleEl.innerHTML = result[0].word;
            meanEl.innerHTML = result[0].meanings[0].definitions[0].definition;
            audioEl.src = result[0].phonetics[0].audio;
        }
    } catch (error) {
        // Handle and log any errors that occur during the API request
        console.log(error);
        infoTxt.innerHTML = `Occurance of error, Please try again...`
    }
}

// Add a keyup event listener to the input field
inputEl.addEventListener("keyup", (e) => {
    if(e.target.value && e.key === "Enter"){
         // When Enter key is pressed and input is not empty, call the ftechAPI function
        ftechAPI(e.target.value);
    }
})

