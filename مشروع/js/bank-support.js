const chatBtn = document.getElementById("chatBtn");
const chatSection = document.getElementById("chatSection");
const sendMessageBtn = document.getElementById("sendMessage");
const messageInput = document.getElementById("messageInput");
const chatMessages = document.getElementById("chatMessages");

chatBtn.addEventListener("click", () => {
  chatSection.classList.toggle("hidden");
});

sendMessageBtn.addEventListener("click", () => {
  const messageText = messageInput.value.trim();
  if (messageText === "") return;

  const clientMessage = document.createElement("div");
  clientMessage.classList.add("message", "client");
  clientMessage.textContent = messageText;
  chatMessages.appendChild(clientMessage);

  messageInput.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // محاكاة رد الموظف
  setTimeout(() => {
    const reply = document.createElement("div");
    reply.classList.add("message", "employee");
    reply.textContent = "تم استلام رسالتك، جاري تحويلها للموظف المختص ✅";
    chatMessages.appendChild(reply);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1500);
});