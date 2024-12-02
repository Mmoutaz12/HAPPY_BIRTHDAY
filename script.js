const countdown = document.getElementById("countdown");

function updateCountdown() {
  const targetDate = new Date("2024-12-12T00:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    // عند انتهاء العد التنازلي، الانتقال إلى الصفحة الجديدة
    window.location.href = "message.html"; // اسم الصفحة الجديدة

    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 

* 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}


// تحديث العداد كل ثانية
setInterval(updateCountdown, 1000);
