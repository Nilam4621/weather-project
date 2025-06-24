const time = document.getElementById("time");
const btn = document.getElementById("stopBtn");
time.style.fontfamily = "sans-serif";
time.style.color = "green";

    function showtime() {
    const currentTime = new Date();
    const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
document.getElementById("time").innerText = time
}
let interval = setInterval(showtime , 1000);
btn.addEventListener("click", () =>{
     clearInterval(interval);
});