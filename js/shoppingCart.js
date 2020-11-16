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

// 前往購物車頁面
//修購物車 popup 高度被撐開問題 
function goToShoppingInfo() {
    location.href = './shoppingInfo.html';
}