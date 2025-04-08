// Toggle dark/light theme
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
  
  // Simulated AI chatbot
  function askAI() {
    const input = document.getElementById("chat-input").value.toLowerCase();
    let response = "Sorry, I didn't get that.";
  
    if (input.includes("project") || input.includes("work")) {
      response = "I’ve built responsive websites using HTML, CSS, and JS! Want to see my latest?";
    } else if (input.includes("name") || input.includes("who")) {
      response = "I'm Douae, a passionate frontend developer & designer.";
    } else if (input.includes("contact")) {
      response = "You can reach me on LinkedIn or by email at douae@example.com!";
    }
  
    document.getElementById("chat-response").innerText = response;
  }
  