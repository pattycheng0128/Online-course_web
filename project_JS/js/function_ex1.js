function greet() {
    var greetNote = "歡迎光臨，請問你要點什麼?漢堡剩下最後8個喔!";
    document.getElementById('greetId').textContent = greetNote;
    console.log(greetNote);
}
greet();

function order(hamNum, cokeNum) {
    var total = (hamNum * 50) + (cokeNum * 20);
    document.getElementById('totalId').textContent = total;
    console.log(total);
}

order(1, 3);