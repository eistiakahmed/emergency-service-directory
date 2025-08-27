// heart button

// const { createElement } = require("react");

const heartButtons = document.getElementsByClassName("heart-btn");
for (const heartButton of heartButtons) {
  heartButton.addEventListener("click", function () {
    const heartCount = document.getElementById("heart-counts").innerText;
    let newCountStart = Number(heartCount) + 1;
    document.getElementById("heart-counts").innerText = newCountStart;
  });
}






// call button

document.getElementById("call-btn-1").addEventListener("click", function () {
    const coinCount = parseInt(document.getElementById("coin-count").innerText);
    const callHistory = [];
  if (coinCount >= 20) {
    alert("📞 Calling National Emergency Number 999...");
    const newAvailableCoin = coinCount - 20;
    document.getElementById("coin-count").innerText = newAvailableCoin;

    const history = {
        serviceName: "Fire Service Number",
        serviceNumber: "999",
        time: new Date().toLocaleTimeString()
    }
    callHistory.push(history)

    const callHistoryData = document.getElementById("callhistory-data")
    for(const call of callHistory){
        const storage = document.createElement("div")
        storage.innerHTML = `
        <div class="mt-5 rounded-2xl bg-[#f8f8f8] flex justify-between items-center p-5">
            <div>
              <h1 class="text-lg font-semibold">${call.serviceName}</h1>
              <p class="text-gray-500 text-lg">${call.serviceNumber}</p>
            </div>
            <div>
                <p class="text-lg">${call.time}</p>
            </div>
          </div>
        `
        callHistoryData.appendChild(storage)

    }

  } else {
    alert("❌ You don't have enough coins. You need at least 20 coins to make a call.");
  }
});


// clear button

document.getElementById("btn-clear").addEventListener("click", function(){
    const callHistoryData = document.getElementById("callhistory-data")
    callHistoryData.innerText = "";
})



// btn-2

document.getElementById("call-btn-2").addEventListener("click", function () {
    const coinCount = parseInt(document.getElementById("coin-count").innerText);
    const callHistory = [];
  if (coinCount >= 20) {
    alert("📞 Calling National Emergency Number 999...");
    const newAvailableCoin = coinCount - 20;
    document.getElementById("coin-count").innerText = newAvailableCoin;

    const history = {
        serviceName: "Police Helpline Number",
        serviceNumber: "999",
        time: new Date().toLocaleTimeString()
    }
    callHistory.push(history)

    const callHistoryData = document.getElementById("callhistory-data")
    for(const call of callHistory){
        const storage = document.createElement("div")
        storage.innerHTML = `
        <div class="mt-5 rounded-2xl bg-[#f8f8f8] flex justify-between items-center p-5">
            <div>
              <h1 class="text-lg font-semibold">${call.serviceName}</h1>
              <p class="text-gray-500 text-lg">${call.serviceNumber}</p>
            </div>
            <div>
                <p class="text-lg">${call.time}</p>
            </div>
          </div>
        `
        callHistoryData.appendChild(storage)

    }

  } else {
    alert("❌ You don't have enough coins. You need at least 20 coins to make a call.");
  }
});