function displayQuote() {
  let quote = `
    Belief is the compass <br/>
    guiding us through uncertainty, <br/>
    the beacon illuminating our path toward boundless possibilities.
    `;

  new Typewriter("#quote", {
    strings: quote,
    autoStart: true,
    delay: 1,
  });
}

function displayGeneratedQuote(response) {
  let quoteElement = document.querySelector("#quote");
  quoteElement.innerHTML = "";
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let quoteTopicInput = document.querySelector("#quote-topic");

  let apiKey = "0e6edd8o3a1bf93cac4e5tc0566fb691";
  let context =
    "Your AI specializes in crafting positive and uplifting messages designed to kickstart someone's day with optimism and energy. Your task is to generate a motivational quote in basic HTML format. Ensure the quote embodies positivity, encouragement, and inspiration without using any specific titles or headings.";
  let prompt = `User instructions: Generate a quote about ${quoteTopicInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="waiting"> Get ready to embrace positivity – your dose of inspiration is loading!</div>`;

  axios.get(apiUrl).then(displayGeneratedQuote);
}

document.addEventListener("DOMContentLoaded", function () {
  displayQuote();
});

let quoteFormElement = document.querySelector("#quote-form");
quoteFormElement.addEventListener("submit", generateQuote);
