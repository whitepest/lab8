let player = document.getElementById("player");
player.innerText = prompt("What's your name?", "Player");

play.addEventListener("click", function () {
    if (+wins1.innerText < 3 && +wins2.innerText < 3) {
        let tmp1 = Math.round(Math.random() * 10);
        let tmp2 = Math.round(Math.random() * 10);
        score1.innerText = tmp1;
        score2.innerText = tmp2;

        if (tmp1 > tmp2) {
            +wins1.innerText++;
        } else if (tmp1 < tmp2) {
            +wins2.innerText++;
        }
    }
    if (+wins1.innerText == 3) {
        setTimeout(() => confirm(`${player.innerText} won!\nrestart?`) ? document.location.reload() : undefined, 100);
    } else if (+wins2.innerText == 3) {
        setTimeout(() => confirm("Computer won!\nrestart?") ? document.location.reload() : undefined, 100);
    }
});