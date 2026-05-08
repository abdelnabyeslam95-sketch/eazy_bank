// cards.js

document.addEventListener("DOMContentLoaded", function () {
    // عناصر الإدخال
    var fullNameInput = document.getElementById("fullName");
    var cardNumberInput = document.getElementById("cardNumber");
    var expiryInput = document.getElementById("expiryDate");
    var cvvInput = document.getElementById("cvv");
    var cardPreview = document.getElementById("cardPreview");
  
    // تحديث المعاينة
    function updatePreview() {
      if (!cardPreview) return;
  
      var name = fullNameInput ? fullNameInput.value : "";
      var number = cardNumberInput ? cardNumberInput.value : "";
      var expiry = expiryInput ? expiryInput.value : "";
      var cvv = cvvInput ? cvvInput.value : "";
  
      cardPreview.innerHTML =
        "<div class='card-design'>" +
        "<p><strong>الاسم:</strong> " + name + "</p>" +
        "<p><strong>الرقم:</strong> " + number + "</p>" +
        "<p><strong>الصلاحية:</strong> " + expiry + "</p>" +
        "<p><strong>CVV:</strong> " + cvv + "</p>" +
        "</div>";
    }
  
    // ربط الأحداث
    if (fullNameInput) {
      fullNameInput.addEventListener("input", updatePreview);
    }
    if (cardNumberInput) {
      cardNumberInput.addEventListener("input", updatePreview);
    }
    if (expiryInput) {
      expiryInput.addEventListener("input", updatePreview);
    }
    if (cvvInput) {
      cvvInput.addEventListener("input", updatePreview);
    }
  
    // زر الإنشاء
    var createCardBtn = document.getElementById("createCardBtn");
    if (createCardBtn) {
      createCardBtn.addEventListener("click", function (e) {
        e.preventDefault();
        alert("تم إنشاء البطاقة بنجاح!");
      });
    }
  });