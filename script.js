var bg = 0;
// 获取日期和时间
function getDateTime() {
    // 创建Date对象
    let date = new Date();
    // 获取星期，从0开始，需要加1
    let week = date.getDay();
    // 获取小时
    let hour = date.getHours();
    // 获取分钟
    let minute = date.getMinutes();
    // 获取秒数
    let second = date.getSeconds();
    // 定义星期数组
    let weekArray = ["日", "一", "二", "三", "四", "五", "六"];
    // 定义日期字符串
    let dateString = " 星期" + weekArray[week];
    // 定义时间字符串
    let timeString = ("0" + hour).slice(-2) + ":" + ("0" + minute).slice(-2);
    // 定义秒数字符串
    let secondString = ":" + ("0" + second).slice(-2);
    // 获取时间容器元素
    let timeContainer = document.getElementById("time-container");
    // 获取时间元素
    let timeElement = document.getElementById("time");
    // 获取秒数元素
    let secondElement = document.getElementById("second");
    // 获取日期元素
    let dateElement = document.getElementById("date");
    // 设置时间元素的内容为时间字符串
    timeElement.textContent = timeString;
    // 设置秒数元素的内容为秒数字符串
    secondElement.textContent = secondString;
    // 设置日期元素的内容为日期字符串
    dateElement.textContent = dateString;
}

function bgSwitcher() {  
  if (bg == 1) {
    document.body.style.backgroundImage = "url(images/background.png)";
    bg = 0;
  } else {
    document.body.style.backgroundImage = "url(https://api.cyrilstudio.top/bing/image.php?size=1920x1080)";  
    bg = 1;
  } 
}

// 页面加载完成后执行
window.onload = function() {  
  bgSwitcher();
  document.getElementById("time-container").addEventListener("click", bgSwitcher);
    // 获取日期和时间
    getDateTime();
    // 每隔一秒更新时间
    setInterval(getDateTime, 1000);
}
