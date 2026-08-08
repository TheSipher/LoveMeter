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

const crazyReelScreen = document.getElementById("crazyReelScreen");

const topNumber = document.getElementById("topNumber");

const centerNumber = document.getElementById("centerNumber");

const bottomNumber = document.getElementById("bottomNumber");

const analyzerDisplay = document.querySelector(".analyzer-display");

const resultTitle = document.getElementById("resultTitle");
/*=========================
        VARIABLES
=========================*/
// =========================
// RECORDING
// =========================

let cameraStream = null;
let screenStream = null;
let recordingStream = null;
let mediaRecorder = null;
let recordedChunks = [];
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

let reelAnimation;

let currentPosition = 0;

const reelHeight = 110;

let lastCenterIndex = -1;

const reelValues = [];

let reelIndex = 0;

let displayedValue = 0;

let increment = 6;

let reelDelay = 18;

let reelRunning = false;

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

  analyzerDisplay.classList.add("panic");

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

    container.classList.remove("flash-slow", "flash-medium", "flash-fast");

    if (index <= 1) {
      container.classList.add("flash-slow");
    } else if (index <= 3) {
      container.classList.add("flash-medium");
    } else if (index <= 4) {
      container.classList.add("flash-fast");
    }

    index++;

    if (index >= panicMessages.length) {
      setTimeout(function () {
        stopVibration();

        startCrazyReel();
      }, 1500);

      return;
    }

    setTimeout(nextMessage, 1900);
  }

  nextMessage();
}
function startCrazyReel() {
  resultScreen.style.display = "none";

  crazyReelScreen.classList.add("active");

  buildReel();

  reelIndex = 0;

  reelDelay = 18;

  spinReel();
}
function buildReel() {
  reelValues.length = 0;

  displayedValue = 120;

  increment = 7;
}
function updateReel() {
  topNumber.textContent = Math.max(displayedValue - increment, 0);

  centerNumber.textContent = displayedValue;

  bottomNumber.textContent = Math.min(displayedValue + increment, 999);
}
function spinReel() {
  displayedValue = 0;
  increment = 6;
  reelDelay = 18;

  function step() {
    displayedValue += increment;

    if (displayedValue > 999) {
      displayedValue = 999;
    }

    updateReel(displayedValue);

    // progressively larger jumps
    if (displayedValue > 150) increment = 8;
    if (displayedValue > 300) increment = 11;
    if (displayedValue > 500) increment = 16;
    if (displayedValue > 700) increment = 22;
    if (displayedValue > 850) increment = 15;
    if (displayedValue > 930) increment = 8;
    if (displayedValue > 970) increment = 4;
    if (displayedValue > 990) increment = 1;

    // gradually slow
    if (displayedValue > 500) reelDelay += 0.5;
    if (displayedValue > 700) reelDelay += 1;
    if (displayedValue > 850) reelDelay += 2;
    if (displayedValue > 930) reelDelay += 4;

    if (displayedValue >= 999) {
      displayedValue = 999;

      centerNumber.textContent = "999";
      topNumber.textContent = "998";
      bottomNumber.textContent = "999";

      setTimeout(() => {
        reelStopped();
      }, 400);

      return;
    }

    setTimeout(step, reelDelay);
  }

  step();
}
function reelStopped() {
  repeat999(4);
}
function repeat999(times) {
  let count = 0;

  function cycle() {
    centerNumber.classList.add("max-reading");

    if (navigator.vibrate) {
      navigator.vibrate([60, 40, 120]);
    }

    setTimeout(() => {
      centerNumber.classList.remove("max-reading");

      // make the reel roll one step
      topNumber.textContent = "999";
      centerNumber.textContent = "999";
      bottomNumber.textContent = "999";

      setTimeout(() => {
        topNumber.textContent = "999";
        centerNumber.textContent = "999";
        bottomNumber.textContent = "999";

        count++;

        if (count < times) {
          setTimeout(cycle, 150);
        } else {
          showQuestionMarks();
        }
      }, 120);
    }, 300);
  }

  cycle();
}
function rollQuestionMarks() {
  // Clear the other reel numbers
  topNumber.textContent = "";
  bottomNumber.textContent = "";

  // Put ???? above the viewing area
  centerNumber.textContent = "????";

  centerNumber.classList.remove("overload-glow");

  // Start above the center
  centerNumber.classList.add("question-roll");

  // Force the browser to register the starting position
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      centerNumber.classList.add("question-roll-settle");
    });
  });

  // Wait until the roll has completely settled
  setTimeout(() => {
    centerNumber.classList.remove("question-roll");
    centerNumber.classList.remove("question-roll-settle");

    resultMessage.innerText = "Impossible value detected 😨";

    if (navigator.vibrate) {
      navigator.vibrate([100, 80, 150, 80, 250]);
    }

    crazyReelScreen.classList.add("overload");

    // Let ???? sit there before the glow begins
    setTimeout(() => {
      startQuestionMarkGlow();
    }, 1800);
  }, 850);
}
function startQuestionMarkGlow() {
  centerNumber.classList.add("overload-glow");

  setTimeout(() => {
    startInfinityTransition();
  }, 1600);
}
function showQuestionMarks() {
  centerNumber.classList.remove("max-reading");

  setTimeout(() => {
    resultMessage.innerText = "⚠️ Something is wrong...";
  }, 1200);

  setTimeout(() => {
    rollQuestionMarks();
  }, 2500);
}
function revealInfinity() {
  resultNumber.style.opacity = "0";
  resultNumber.style.transform = "scale(.4)";

  resultNumber.innerHTML = "∞";
  resultNumber.className = "final-infinity";
  resultNumber.style.display = "block";

  setTimeout(() => {
    resultMessage.innerHTML = `
        wow!! This is a medical miracle! 😱😱 You love me too much 
    `;
  }, 5000);

  setTimeout(() => {
    resultMessage.innerHTML = `
        I love you too babe 😉
    `;
  }, 10000);

  setTimeout(() => {
    resultMessage.innerHTML = `
        And hence proven you love me more than 100% 🙂‍↕️🙂‍↕️
    `;
  }, 15000);

  setTimeout(() => {
    resultMessage.innerHTML = `
        don't deny that every time you see me your heart beats faster and you feel butterflies in your stomach 😘
    `;
  }, 20000);

  setTimeout(() => {
    resultMessage.innerHTML = `
        maybe not that dramatic 😜 but you still feel something right?
    `;
  }, 30000);

  setTimeout(() => {
    resultMessage.innerHTML = `
        Don't you????
    `;
  }, 35000);

  setTimeout(() => {
    resultMessage.innerHTML = `
        yeah you do 😁🙂‍↕️🙂‍↕️
    `;
  }, 39000);

  setTimeout(() => {
    resultMessage.innerHTML = `
        But I love you more than you love me 😘 
    `;
  }, 44000);

  setTimeout(() => {
    resultMessage.innerHTML = `
        Hence I win 😎
    `;
  }, 50000);

  setTimeout(() => {
    resultMessage.innerHTML = `
        Love you thanvi really 😉 <br> okay this is the end of this game 😁
    `;
  }, 55000);

  setTimeout(createConfetti, 600);

  requestAnimationFrame(() => {
    resultNumber.classList.add("infinity-final");
  });
}
function createConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");

    confetti.className = "confetti";

    confetti.style.left = Math.random() * 100 + "vw";

    confetti.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}
function startInfinityTransition() {
  const flash = document.getElementById("transitionFlash");

  // White begins while ???? is still glowing
  flash.classList.add("white-out");

  setTimeout(() => {
    crazyReelScreen.classList.remove("active");

    resultScreen.style.display = "flex";

    resultTitle.innerHTML = "";
    resultNumber.innerHTML = "";
    resultMessage.innerHTML = "";

    // Keep the screen white while the analyzer returns
    setTimeout(() => {
      flash.classList.remove("white-out");

      revealInfinity();
    }, 150);
  }, 650);
}
/* =========================
   RECORDING SETUP
========================= */

const recordingSetup = document.getElementById("recordingSetup");
const startRecordingSetup = document.getElementById("startRecordingSetup");
const permissionStatus = document.getElementById("permissionStatus");

let cameraStream = null;

startRecordingSetup.addEventListener("click", async () => {
  try {
    permissionStatus.innerText = "Requesting camera and microphone... 🎥";

    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user",
      },
      audio: true,
    });

    permissionStatus.innerText = "Camera and microphone ready! ❤️";

    console.log("Camera stream:", cameraStream);

    // For now, just hide the setup screen.
    // Recording will be added in the next step.
    setTimeout(() => {
      recordingSetup.style.display = "none";
    }, 800);
  } catch (error) {
    console.error(error);

    permissionStatus.innerText =
      "Camera or microphone permission was denied. 😭";
  }
});
async function startRecording() {
  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "user",
      },
      audio: true,
    });

    console.log("Camera + microphone ready.");
  } catch (error) {
    console.error("Camera/microphone permission failed:", error);
  }
}
