import { fetchWeatherData } from "./weather.js";
import { DeepL } from "./translation.js";

// ----- 教材コード
try {

$(function() {

  $('#fadeOut').on('click', function () {
    $('.box').css('opacity', 0);
  });
  $('#fadeIn').on('click', function () {
    $('.box').css('opacity', 1);
  });
  $('#slideUp').on('click', function () {
    $('.box').css('height', 0);
  });
  $('#slideDown').on('click', function () {
    $('.box').css('height', 200);
  });

});


} catch(e) {
  const deepLmsg = await DeepL(e.message);
  html += `<div class="text-danger">【エラー】${deepLmsg}</div>`;
}

// -----

// 天気予報
// fetchWeatherData();

const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
  location.reload();
});