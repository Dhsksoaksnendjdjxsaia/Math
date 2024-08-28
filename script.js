function checkNumber() {
  var number = parseFloat(document.getElementById("number-input").value);
  var result = "";

  if (isNaN(number)) {
    result = "الرجاء إدخال عدد صحيح.";
  } else {
    if (Number.isInteger(number) && number >= 0) {
      result += "هذا العدد ينتمي إلى الأعداد الطبيعية. ";
    }
    if (Number.isInteger(number)) {
      result += "هذا العدد ينتمي إلى الأعداد الصحيحة. ";
    }
    if (!isNaN(number)) {
      result += "هذا العدد ينتمي إلى الأعداد الحقيقية. ";
    }
    if (number % 1 !== 0) {
      result += "هذا العدد ينتمي إلى الأعداد الكسرية. ";
    }
    if (number < 0) {
      result += "هذا العدد قد يكون جزءًا من الأعداد التخيلية إذا تم تعيينه كمربع. ";
    }
    if (!Number.isInteger(number) && number > 0 && Math.sqrt(number) % 1 !== 0) {
      result += "هذا العدد ينتمي إلى الأعداد غير الكسرية. ";
    }
  }

  document.getElementById("result").innerText = result;
}