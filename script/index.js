// heart button
const heartButtons = document.getElementsByClassName("heart-btn");
for (const heartButton of heartButtons) {
  heartButton.addEventListener("click", function () {
    const heartCount = document.getElementById("heart-counts").innerText;
    let newCountStart = Number(heartCount) + 1;
    document.getElementById("heart-counts").innerText = newCountStart;
  });
}


// clear button

document.getElementById("btn-clear").addEventListener("click", function(){
    const callHistoryData = document.getElementById("callhistory-data")
    callHistoryData.innerText = "";
})



// call button functionality
 
function handleCall(btnId, serviceName, serviceNumber) {
    document.getElementById(btnId).addEventListener("click", function () {
        const coinCount = parseInt(document.getElementById("coin-count").innerText);
        if (coinCount >= 20) {
            alert(`📞 Calling ${serviceName} Number ${serviceNumber}...`);
            const newAvailableCoin = coinCount - 20;
            document.getElementById("coin-count").innerText = newAvailableCoin;

            
            const history = {
                serviceName: serviceName,
                serviceNumber: serviceNumber,
                time: new Date().toLocaleTimeString()
            }

            const callHistoryData = document.getElementById("callhistory-data");
            const storage = document.createElement("div");
            storage.innerHTML = `
                <div class="mt-5 rounded-2xl bg-[#f8f8f8] flex justify-between items-center p-5">
                    <div>
                        <h1 class="text-lg font-semibold">${history.serviceName}</h1>
                        <p class="text-gray-500 text-lg">${history.serviceNumber}</p>
                    </div>
                    <div>
                        <p class="text-lg">${history.time}</p>
                    </div>
                </div>
            `;
            callHistoryData.appendChild(storage);

        } else {
            alert("❌ You don't have enough coins. You need at least 20 coins to make a call.");
        }
    });
}


// call function
handleCall("call-btn-1", "National Emergency", "999");
handleCall("call-btn-2", "Police", "999");
handleCall("call-btn-3", "Fire Service", "999");
handleCall("call-btn-4", "Ambulance", "1994-999999");
handleCall("call-btn-5", "Women & Child Helpline", "109");
handleCall("call-btn-6", "Anti-Corruption", "106");
handleCall("call-btn-7", "Electricity Outage", "16216");
handleCall("call-btn-8", "Brac", "16445");
handleCall("call-btn-9", "Bangladesh Railway", "163");


// Copy Button Functionality

const copyButtons = document.getElementsByClassName("copy-btn")
for(const copyBtn of copyButtons){
  copyBtn.addEventListener("click", function(e){
    const btn = e.target; 
    const card = btn.closest(".card");
    const text = card.querySelector(".copy-text").innerText;

    navigator.clipboard.writeText(text);

    alert("Text has been copied successfully : " + text);
    const copyCounts = document.getElementById("copy-counts").innerText
    let newCopyCount = Number(copyCounts) + 1;
    document.getElementById("copy-counts").innerText = newCopyCount;
  })

}



