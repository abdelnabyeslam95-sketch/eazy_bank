
  const toggle = document.getElementById("darkModeToggle");
  const body = document.body;

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      toggle.textContent = "☀"; // يغير الأيقونة
    } else {
      toggle.textContent = "🌙";
    }
  });

  AOS.init({
    duration: 1000,
    once: true
  });
  // مثال للتفاعل مع زرار الإيداع
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("الميزة دي تجريبية فقط 🎉");
  });
});
// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "تم إرسال رسالتك بنجاح ✅";
  this.reset();
});
// فتح حساب بنكى 
document.getElementById("accountForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value;
  const accountType = document.getElementById("accountType").value;
  const deposit = document.getElementById("deposit").value;
  const msg = document.getElementById("accountMessage");

  if (deposit < 500) {
    msg.style.color = "red";
    msg.textContent = "❌ الحد الأدنى لفتح الحساب هو 500 جنيه";
    return;
  }

  msg.style.color = "green";
  msg.textContent = "✅ تم فتح حساب ${accountType} بنجاح باسم ${name}";
  document.getElementById("accountForm").reset();
});

const chatbotButton = document.getElementById('chatbotButton');
const chatbotBox = document.getElementById('chatbotBox');
const closeChat = document.getElementById('closeChat');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatbotMessages = document.getElementById('chatbotMessages');

chatbotButton.onclick = () => chatbotBox.style.display = 'flex';
closeChat.onclick = () => chatbotBox.style.display = 'none';

sendBtn.onclick = sendMessage;
userInput.addEventListener("keypress", e => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;
  
  const userMsg = document.createElement("div");
  userMsg.classList.add("user-message");
  userMsg.innerText = message;
  chatbotMessages.appendChild(userMsg);
  userInput.value = "";

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.classList.add("bot-message");
    botMsg.innerText = getBotResponse(message);
    chatbotMessages.appendChild(botMsg);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }, 500);
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("فتح حساب")) return "لفتح حساب جديد، ادخل على صفحة (فتح حساب بنكي) من القائمة الرئيسية.";
  if (input.includes("بطاقه") || input.includes("ائتمان")) return "يمكنك إصدار بطاقة ائتمان من صفحة (إصدار بطاقة ائتمان).";
  if (input.includes("قرض")) return "لدينا قروض متعددة — راجع صفحة (القروض) لمعرفة التفاصيل.";
  if (input.includes("تواصل")) return "يمكنك التواصل مع موظف البنك عبر صفحة (التواصل المباشر).";
  if (input.includes("استثمار")) return "صفحة (الادخار والاستثمار) تقدم خطط متعددة تناسب أهدافك المالية.";
  if (input.includes("خدمه رقميه")) return "الخدمات الرقمية تساعدك في إدارة أموالك بسهولة عبر الإنترنت.";
  return "عذرًا، لم أفهم سؤالك بالضبط 😅 — جرب صياغة أخرى أو راجع الصفحات من القائمة.";
}