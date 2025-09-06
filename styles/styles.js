// heart count
let count = 0;
let heartCount = document.getElementById("heart-counter");

// national service
document.getElementById("national-btn").addEventListener("click", function () {
  count++;
  heartCount.textContent = count;
});
// call btn
document.getElementById("national-call-btn").addEventListener("click", function () {
  alert("You Are Calling The National Emergency Number! The Number You Have Dialed Is 999");
});
// copy btn
document.getElementById("copy-btn1").addEventListener("click", function () {
  const number = document.getElementById("national-copy-btn").textContent;
  navigator.clipboard.writeText(number);
})

// police service 
document.getElementById("police-btn").addEventListener("click", function () {
  count++;
  heartCount.textContent = count;
});
// call btn
document.getElementById("police-call-btn").addEventListener("click", function () {
  alert("You Are Calling The Police Station! The Number You Have Dialed Is 999");
});
// copy btn
document.getElementById("copy-btn2").addEventListener("click", function () {
  const number = document.getElementById("police-copy-btn").textContent;
  navigator.clipboard.writeText(number);
})


// fire service 
document.getElementById("fire-btn").addEventListener("click", function () {
  count++;
  heartCount.textContent = count;
});
// call btn
document.getElementById("fire-call-btn").addEventListener("click", function () {
  alert("You Are Calling The Fire Service Department! The Number You Have Dialed Is 999");
});
// copy btn
document.getElementById("copy-btn3").addEventListener("click", function () {
  const number = document.getElementById("fire-copy-btn").textContent;
  navigator.clipboard.writeText(number);
})


// ambulance service 
document.getElementById("ambulance-btn").addEventListener("click", function () {
  count++;
  heartCount.textContent = count;
});
// call btn
document.getElementById("ambu-call-btn").addEventListener("click", function () {
  alert("You Are Calling The Ambulance Service! The Number You Have Dialed Is 1994-999999");
});
// copy btn
document.getElementById("copy-btn4").addEventListener("click", function () {
  const number = document.getElementById("ambu-copy-btn").textContent;
  navigator.clipboard.writeText(number);
})


// women and child helpline
document.getElementById("woman-child-btn").addEventListener("click", function () {
  count++;
  heartCount.textContent = count;
});
// call btn
document.getElementById("womenChild-call-btn").addEventListener("click", function () {
  alert("You Are Calling The Women And Children Safety Helpline! The Number You Have Dialed Is 109");
});
// copy btn
document.getElementById("copy-btn5").addEventListener("click", function () {
  const number = document.getElementById("woman-child-copy-btn").textContent;
  navigator.clipboard.writeText(number);
})


// anti corruption service 
document.getElementById("anti-btn").addEventListener("click", function () {
  count++;
  heartCount.textContent = count;
});
// call btn
document.getElementById("anti-call-btn").addEventListener("click", function () {
  alert("You Are Calling Anti Corruption Helpline! The Number You Have Dialed Is 106");
});
// copy btn
document.getElementById("copy-btn6").addEventListener("click", function () {
  const number = document.getElementById("anti-copy-btn").textContent;
  navigator.clipboard.writeText(number);
})


// electricity service 
document.getElementById("electric-btn").addEventListener("click", function () {
  count++;
  heartCount.textContent = count;
});
// call btn
document.getElementById("electric-call-btn").addEventListener("click", function () {
  alert("You Are Calling Electricity Service Helpline! The Number You Have Dialed Is 162616");
});
// copy btn
document.getElementById("copy-btn7").addEventListener("click", function () {
  const number = document.getElementById("electric-copy-btn").textContent;
  navigator.clipboard.writeText(number);
})


// brac service 
document.getElementById("brac-btn").addEventListener("click", function () {
  count++;
  heartCount.textContent = count;
});
// call btn
document.getElementById("brac-call-btn").addEventListener("click", function () {
  alert("You Are Calling Brac Helpline! The Number You Have Dialed Is 16445");
});
// copy btn
document.getElementById("copy-btn8").addEventListener("click", function () {
  const number = document.getElementById("brac-copy-btn").textContent;
  navigator.clipboard.writeText(number);
})


// railway service
document.getElementById("railway-btn").addEventListener("click", function () {
  count++;
  heartCount.textContent = count;
});
// call btn
document.getElementById("railway-call-btn").addEventListener("click", function () {
  alert("You Are Calling Bangladesh Railway Helpline! The Number You Have Dialed Is 163");
});
// copy btn
document.getElementById("copy-btn9").addEventListener("click", function () {
  const number = document.getElementById("railway-copy-btn").textContent;
  navigator.clipboard.writeText(number);
})