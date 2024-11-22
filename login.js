document.getElementById("log-btn").addEventListener("click", () => {
  let accnum = document.getElementById("num").value;
  let accpin = document.getElementById("pin").value;

  if (
    (accnum === "12345" && accpin === "12345") ||
    (accnum === "user" && accpin === "user")
  ) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Account Number or Pin");
  }
  document.getElementById("num").value = "";
  document.getElementById("pin").value = "";
});
