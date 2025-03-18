function toggleRule(element) {
    let details = element.querySelector(".rule-details");
    if (details.style.display === "block") {
      details.style.display = "none";
    } else {
      details.style.display = "block";
    }
  }
  