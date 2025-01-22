const messageInput = document.getElementById("message"); // Get the input element by its ID
const chatHistory = document.querySelector(".chat-history"); // Get the chat history element

document.getElementById("sendMessage").addEventListener("click", () => {
    const message = messageInput.value;

    const li = document.createElement("li");
    li.textContent = message;

    chatHistory.appendChild(li); 

    messageInput.value = "";

    chatHistory.scrollTop = chatHistory.scrollHeight;
});