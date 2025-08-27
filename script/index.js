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


// clear button

document.getElementById("btn-clear").addEventListener("click", function(){
    const callHistoryData = document.getElementById("callhistory-data")
    callHistoryData.innerText = "";
})



// call button
 
// btn-1
document.getElementById("call-btn-1").addEventListener("click", function () {
    const coinCount = parseInt(document.getElementById("coin-count").innerText);
    const callHistory = [];
  if (coinCount >= 20) {
    alert("📞 Calling National Emergency Number 999...");
    const newAvailableCoin = coinCount - 20;
    document.getElementById("coin-count").innerText = newAvailableCoin;

    const history = {
        serviceName: "National Emergency",
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






// btn-2

document.getElementById("call-btn-2").addEventListener("click", function () {
    const coinCount = parseInt(document.getElementById("coin-count").innerText);
    const callHistory = [];
  if (coinCount >= 20) {
    alert("📞 Calling Police Helpline Number 999...");
    const newAvailableCoin = coinCount - 20;
    document.getElementById("coin-count").innerText = newAvailableCoin;

    const history = {
        serviceName: "Police",
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

// btn-3

document.getElementById("call-btn-3").addEventListener("click", function () {
    const coinCount = parseInt(document.getElementById("coin-count").innerText);
    const callHistory = [];
  if (coinCount >= 20) {
    alert("📞 Calling Fire Service Number 999...");
    const newAvailableCoin = coinCount - 20;
    document.getElementById("coin-count").innerText = newAvailableCoin;

    const history = {
        serviceName: "Fire Service",
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

// btn-4

document.getElementById("call-btn-4").addEventListener("click", function () {
    const coinCount = parseInt(document.getElementById("coin-count").innerText);
    const callHistory = [];
  if (coinCount >= 20) {
    alert("📞 Calling Ambulance Service 1994-999999...");
    const newAvailableCoin = coinCount - 20;
    document.getElementById("coin-count").innerText = newAvailableCoin;

    const history = {
        serviceName: "Ambulance",
        serviceNumber: "1994-999999",
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



// btn-5

document.getElementById("call-btn-5").addEventListener("click", function () {
    const coinCount = parseInt(document.getElementById("coin-count").innerText);
    const callHistory = [];
  if (coinCount >= 20) {
    alert("📞 Calling Women & Child Helpline 109...");
    const newAvailableCoin = coinCount - 20;
    document.getElementById("coin-count").innerText = newAvailableCoin;

    const history = {
        serviceName: "Women & Child Helpline",
        serviceNumber: "109",
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


// btn-6 

document.getElementById("call-btn-6").addEventListener("click", function () {
    const coinCount = parseInt(document.getElementById("coin-count").innerText);
    const callHistory = [];
  if (coinCount >= 20) {
    alert("📞 Calling Anti-Corruption Helpline 106...");
    const newAvailableCoin = coinCount - 20;
    document.getElementById("coin-count").innerText = newAvailableCoin;

    const history = {
        serviceName: "Anti-Corruption",
        serviceNumber: "106",
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

// btn-7

document.getElementById("call-btn-7").addEventListener("click", function () {
    const coinCount = parseInt(document.getElementById("coin-count").innerText);
    const callHistory = [];
  if (coinCount >= 20) {
    alert("📞 Calling Electricity Helpline 16216...");
    const newAvailableCoin = coinCount - 20;
    document.getElementById("coin-count").innerText = newAvailableCoin;

    const history = {
        serviceName: "Electricity Outage",
        serviceNumber: "16216",
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

//btn-8

document.getElementById("call-btn-8").addEventListener("click", function () {
    const coinCount = parseInt(document.getElementById("coin-count").innerText);
    const callHistory = [];
  if (coinCount >= 20) {
    alert("📞 Calling Brac Helpline 16445...");
    const newAvailableCoin = coinCount - 20;
    document.getElementById("coin-count").innerText = newAvailableCoin;

    const history = {
        serviceName: "Brac",
        serviceNumber: "16445",
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

// btn-9

document.getElementById("call-btn-9").addEventListener("click", function () {
    const coinCount = parseInt(document.getElementById("coin-count").innerText);
    const callHistory = [];
  if (coinCount >= 20) {
    alert("📞 Calling Bangladesh Railway Helpline 163...");
    const newAvailableCoin = coinCount - 20;
    document.getElementById("coin-count").innerText = newAvailableCoin;

    const history = {
        serviceName: "Bangladesh Railway",
        serviceNumber: "163",
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
