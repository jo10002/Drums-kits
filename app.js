const Kits = ["crash","kick","snare","tom"];

const containerEl = document.querySelector(".container");

Kits.forEach(kit =>{
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit ;
    btnEl.style.backgroundImage = "url(images/" + kit + ".png)";
    containerEl.appendChild(btnEl);
    const AudioEl = document.createElement("audio");
    AudioEl.src = "sound/" + kit + ".mp3"
    containerEl.appendChild(AudioEl);
    btnEl.addEventListener("click", () =>{
         AudioEl.play();
    });
    window.addEventListener("keydown", (event) =>{
      if(event.key === kit.slice(0,1)){
        AudioEl.play();
        btnEl.style.transform = "scale(.9)";
        setTimeout(() =>{
            btnEl.style.transform = "scale(1)";
        }, 100)
      }
    })
})