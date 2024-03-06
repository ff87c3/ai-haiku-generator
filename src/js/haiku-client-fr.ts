const buttonFR = document.getElementById("generate-btn-fr");

if (buttonFR) {
  buttonFR.addEventListener("click", function () {
    const loader = document.getElementById("loader");
    const haikuContainer = document.getElementById("haiku-output");

    speechSynthesis.cancel();

    if (loader) {
      loader.style.display = "block";
      loader.classList.add("blink");
    }

    if (haikuContainer) {
      haikuContainer.innerHTML = "";
      haikuContainer.classList.remove("vertical-text");
      haikuContainer.classList.remove("fade-blur");
      haikuContainer.classList.add("flipped-text");
    }

    fetch("/api/haiku-serverless-fr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        console.log(data.haiku);

        if (loader) {
          loader.style.display = "none";
        }

        haikuContainer?.classList.add("fade-blur");

        function keepFirstThreeLines(data: string) {
          const lines = data.split("\n");
          return lines.slice(0, 3).join("\n");
        }

        const trimmedResponse = keepFirstThreeLines(data.haiku);

        if (haikuContainer) {
          haikuContainer.innerText = trimmedResponse;
        }

        speakFrench(trimmedResponse);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}

function speakFrench(text: string) {
  const currentWordContainer = document.getElementById("current-word");
  const haikuContainer = document.getElementById("haiku-output");
  let currentWord = "";

  if (haikuContainer) {
    const formated = haikuContainer.innerHTML;

    if (formated) {
      const lines = formated.split("<br>");

      if (lines) {
        lines.forEach((line, index) => {
          const utterance = new SpeechSynthesisUtterance(line);

          utterance.rate = 0.8;
          utterance.pitch = 0.8;
          utterance.lang = "fr-FR";

          utterance.onboundary = (event) => {
            if (event.name === "word") {
              currentWord = line.substring(
                event.charIndex,
                event.charIndex + event.charLength
              );

              if (currentWordContainer) {
                currentWordContainer.innerHTML = currentWord;
              }
            }
          };

          window.speechSynthesis.speak(utterance);

          utterance.onend = () => {
            if (currentWordContainer) {
              currentWordContainer.innerHTML = "";
            }
          };
        });
      }
    }
  }
}
