const heartButtons = document.getElementsByClassName("heart-btn")

for(const heartButton of heartButtons){
    heartButton.addEventListener("click", function(){
        const heartCount = document.getElementById("heart-counts").innerText
        let newCountStart = Number(heartCount) +1;
        document.getElementById("heart-counts").innerText = newCountStart;
    })
}
