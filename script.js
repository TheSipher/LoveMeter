/*=========================
        ELEMENTS
=========================*/
const heart = document.getElementById("heart");

const status = document.getElementById("status");

const reading = document.getElementById("reading");

const container = document.getElementById("container");

const resultScreen = document.getElementById("resultScreen");

const resultNumber = document.getElementById("resultNumber");

const resultMessage = document.getElementById("resultMessage");

/*=========================
        VARIABLES
=========================*/

let progress = 0;

let holdTimer;

let scanRunning = false;

let releaseMessageIndex = 0;

let calculationProgress = 0;

let calculationTimer;

let loveResult = 0;

let scanFinished = false;

let displayValue = 0;

let slotTimer;

let vibrationLoop;

const releaseMessages = [
  "😒 Science takes time, honey.",

  "🤨 You moved! Cupid is complaining.",

  "🥹 Just 5 seconds... I promise it'll be worth it. ❤️",

  "😭 Please just 5 more seconds bitch pleaseeeee.....",

  "😭 naahhhh please don't do this you are hurting me ",

  "😑 now you are just playing to see these messages. fine no more messages for you 😤",
];

const scanMessages = [
  "🔍 Scanning fingerprint...",

  "💓 Checking heartbeat...",

  "🦋 Counting butterflies...",

  "🏹 Asking Cupid...",

  "🚀 Consulting NASA...",

  "🌍 Checking the universe...",

  "❤️ Calculating...",
];

const calculationMessages = [
  "🧠 Processing emotions...",

  "💕 Measuring butterflies...",

  "💘 Asking Cupid...",

  "🌎 Comparing with 8 billion humans...",

  "☁️ Looking for soulmates...",

  "❤️ Final calculations...",
];
const panicTitles = [
  "🚨 SYSTEM ERROR",

  "RECOVERY MODE",

  "RANGE EXPANSION",

  "EMERGENCY ANALYZER",

  "CRITICAL ERROR",

  "SYSTEM CONFUSION",
];
const panicMessages = [
  "Unexpected value detected...",

  "Attempting automatic recovery...",

  "Increasing measurable range...",

  "Consulting Cupid...",

  "Cupid refused to answer...",

  "This... shouldn't be possible. 😨😱",
];
/*=========================
        EVENTS
=========================*/

heart.addEventListener("mousedown", startScan);

heart.addEventListener("mouseup", stopScan);

heart.addEventListener("mouseleave", stopScan);

heart.addEventListener("touchstart", startScan);

heart.addEventListener("touchend", stopScan);

/*=========================
       FUNCTIONS
=========================*/

function startScan() {
  if (scanFinished) {
    return;
  }

  if (scanRunning) {
    return;
  }

  scanRunning = true;

  heart.classList.add("scanning");

  progress = 0;

  reading.innerText = "0%";

  holdTimer = setInterval(updateScan, 125);
}

function stopScan() {
  if (!scanRunning) {
    return;
  }

  clearInterval(holdTimer);

  scanRunning = false;

  heart.classList.remove("scanning");

  progress = 0;

  reading.innerText = "0%";

  status.innerText =
    releaseMessages[Math.min(releaseMessageIndex, releaseMessages.length - 1)];

  if (releaseMessageIndex < releaseMessages.length - 1) {
    releaseMessageIndex++;
  }
}
function updateScan() {
  progress++;

  reading.innerText = progress + "%";

  const index = Math.floor(progress / 13);

  status.innerText = scanMessages[Math.min(index, scanMessages.length - 1)];

  if (progress >= 100) {
    clearInterval(holdTimer);

    scanRunning = false;

    heart.classList.remove("scanning");

    status.innerText = "✅ Initial Analysis Complete ❤️";

    scanFinished = true;

    setTimeout(startCalculation, 2000);
  }
}
function startCalculation() {
  calculationProgress = 0;

  reading.innerText = "0%";

  calculationTimer = setInterval(updateCalculation, 100);
}
function updateCalculation() {
  calculationProgress++;

  reading.innerText = calculationProgress + "%";

  const index = Math.floor(calculationProgress / 15);

  status.innerText =
    calculationMessages[Math.min(index, calculationMessages.length - 1)];

  if (calculationProgress >= 99) {
    clearInterval(calculationTimer);

    finishCalculation();
  }
  function finishCalculation() {
    status.innerText = "✨ Finalizing results...";

    setTimeout(expandScreen, 1000);
  }
  function expandScreen() {
    container.classList.add("grow");

    setTimeout(function () {
      container.classList.add("fullscreen");

      showFinalResult();
    }, 1200);
  }
  function showFinalResult() {
    loveResult = Math.floor(Math.random() * 9) + 91;

    resultTitle.innerText = "❤️ LOVE ANALYZER ❤️";

    resultNumber.innerText = "--";

    resultMessage.innerText = "Initializing Love Engine...";

    setTimeout(function () {
      startAnalyzerSequence();
    }, 1000);
  }
  function startAnalyzerSequence() {
    const messages = [
      "Initializing Love Engine... ❤️",

      "Connecting to Cupid... 💘",

      "Scanning Romantic Memories... 📖",

      "Reading Heartbeats... 💓",

      "Analyzing Butterflies... 🦋",
    ];

    let index = 0;

    function nextMessage() {
      if (index >= messages.length) {
        startSlotMachine();

        return;
      }

      resultMessage.innerText = messages[index];

      index++;

      setTimeout(nextMessage, 700);
    }

    nextMessage();
  }
  function startSlotMachine() {
    const randomNumbers = [42, 81, 19, 73, 91, 38, 54, 95, 62, 89];

    let i = 0;

    function spin() {
      if (i < randomNumbers.length) {
        resultNumber.innerText = randomNumbers[i] + "%";

        i++;

        setTimeout(spin, 60);
      } else {
        slowDown();
      }
    }

    spin();
  }
  function slowDown() {
    const ending = [91, 93, 95, 97, 99, 97, loveResult];

    const delays = [
      150,

      200,

      250,

      320,

      420,

      550,

      700,
    ];

    let i = 0;

    function finish() {
      resultNumber.innerText = ending[i] + "%";

      if (i >= ending.length - 1) {
        setTimeout(revealResult, 800);

        return;
      }

      setTimeout(function () {
        i++;

        finish();
      }, delays[i]);
    }

    finish();
  }

  function revealResult() {
    resultTitle.innerHTML = "💕 LOVE DETECTED! 💕";

    resultMessage.innerText = "😊 That's suspiciously adorable.";

    // Wait before starting verification
    setTimeout(startVerification, 2500);
  }
  function startVerification() {
    resultTitle.innerHTML = "🔍 VERIFYING RESULT";

    animateVerification();
  }
  let verificationDots;

  function animateVerification() {
    const frames = [
      "Verifying result",

      "Verifying result.",

      "Verifying result..",

      "Verifying result...",
    ];

    let index = 0;

    verificationDots = setInterval(function () {
      resultMessage.innerText = frames[index];

      index++;

      if (index >= frames.length) {
        index = 0;
      }
    }, 300);

    // Stop after 3 seconds
    setTimeout(function () {
      clearInterval(verificationDots);

      verificationError();
    }, 3000);
  }
  function verificationError() {
    resultTitle.innerHTML = panicTitles[0];

    resultMessage.innerHTML = panicMessages[0];

    container.classList.add("flash-slow");

    resultNumber.style.display = "none";

    document.querySelector(".analyzer-display").classList.add("panic");

    if (navigator.vibrate) {
      startVibration();
    }

    setTimeout(function () {
      startPanicSequence();
    }, 1200);
  }
  //=========================================
  // START PHONE VIBRATION
  //=========================================

  function startVibration() {
    if (!navigator.vibrate) {
      return;
    }

    vibrationLoop = setInterval(function () {
      navigator.vibrate(250);
    }, 350);
  }
  //=========================================
  // STOP PHONE VIBRATION
  //=========================================

  function stopVibration() {
    clearInterval(vibrationLoop);

    navigator.vibrate(0);
  }
  function startPanicSequence() {
    let index = 1;

    function nextMessage() {
      resultTitle.innerHTML = panicTitles[index];

      resultMessage.innerHTML = panicMessages[index];

      // Change flash speed
      container.classList.remove("flash-slow", "flash-medium", "flash-fast");

      if (index <= 1) {
        container.classList.add("flash-slow");
      } else if (index <= 3) {
        container.classList.add("flash-medium");
      } else if (index <= 4) {
        container.classList.add("flash-fast");
      } else {
        // SYSTEM CONFUSION
        // Don't add any flash class.
      }

      index++;

      if (index >= panicMessages.length) {
        setTimeout(startCrazyReel, 1500);

        return;
      }

      setTimeout(nextMessage, 1900);
    }
    // Change flash speed based on stage

    container.classList.remove("flash-slow", "flash-medium", "flash-fast");

    if (index <= 1) {
      container.classList.add("flash-slow");
    } else if (index <= 3) {
      container.classList.add("flash-medium");
    } else if (index <= 4) {
      container.classList.add("flash-fast");
    } else {
      // SYSTEM CONFUSION
      // No flashing anymore
    }

    nextMessage();
  }
}
