document.addEventListener("DOMContentLoaded", () => {
  const chatButton = document.getElementById("support-chat-button");
  const chatWidget = document.getElementById("support-chat-widget");
  const closeChatButton = document.getElementById("close-chat");
  const chatInput = document.getElementById("chat-input");
  const chatBody = document.querySelector(".chat-body");
  const sendMessageButton = document.getElementById("send-message");

  // Toggle chat widget (open/close).
  chatButton.addEventListener("click", (e) => {
    e.preventDefault();
    chatWidget.classList.toggle("hidden");
  });

  // Close chat widget.
  closeChatButton.addEventListener("click", () => {
    chatWidget.classList.add("hidden");
  });

  // Function to format the current time.
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Function to send a message.
  const sendMessage = () => {
    const message = chatInput.value.trim();
    if (message) {
      // Display timestamp
      const userTimestamp = document.createElement("div");
      userTimestamp.classList.add("chat-timestamp");
      userTimestamp.textContent = getCurrentTime();
      chatBody.appendChild(userTimestamp);

      // for chat bubble.
      const userMessage = document.createElement("div");
      userMessage.classList.add("chat-bubble", "user-bubble");
      userMessage.textContent = message;
      chatBody.appendChild(userMessage);
      chatInput.value = "";
      chatBody.scrollTop = chatBody.scrollHeight;

      // Simulate employee response.
      // Make it a Real time response with a real employee.
      setTimeout(() => {
        // Display timestamp for employee response
        const employeeTimestamp = document.createElement("div");
        employeeTimestamp.classList.add("chat-timestamp");
        employeeTimestamp.textContent = getCurrentTime();
        chatBody.appendChild(employeeTimestamp);

        // For employee chat bubble
        const employeeMessage = document.createElement("div");
        employeeMessage.classList.add("chat-bubble", "employee-bubble");
        employeeMessage.textContent = `Thank you for your message! How can I assist you further?`;
        chatBody.appendChild(employeeMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
      }, 1000); // Simulate a delay for the response
    }
  };

  // Send message on button click.
  sendMessageButton.addEventListener("click", sendMessage);

  // Send message on "Enter" key press.
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default behavior of Enter key.
      sendMessage();
    }
  });
});
