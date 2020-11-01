// 開啟 popup 畫面
function openPopup() {
    var element = document.getElementById('popupDiv');
    element.classList.add("open");
}

// 關閉 popup 畫面
function closePopup() {
    var element = document.getElementById('popupDiv');
    element.classList.remove("open");
}