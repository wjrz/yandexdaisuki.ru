
document.getElementById("browser").innerText = navigator.userAgent;


function go() {
    alert("Перейти на сайт загрузки Yandex?");
    location.href = "https://browser.yandex.com/";
}


setInterval(() => {
    document.body.style.transform = `rotate(${Math.random()*2-1}deg)`;
}, 100);


const titles = ["安全！！", "最強！！", "神！！", "入れろ！！"];
let i = 0;

setInterval(() => {
    document.title = "Yandexは" + titles[i];
    i = (i + 1) % titles.length;
}, 1000);
