function myFunction() {
    document.getElementById("tester").innerHTML = "JSCRIPT BBY";
}

function rolld4() {
    return Math.floor(Math.random() * 4) + 1;
}
function rolld6() {
    return Math.floor(Math.random() * 6) + 1;
}
function rolld8() {
    return Math.floor(Math.random() * 8) + 1;
}
function rolld10() {
    return Math.floor(Math.random() * 10);
}
function rolld12() {
    return Math.floor(Math.random() * 12) + 1;
}
function rolld20() {
    return Math.floor(Math.random() * 20) + 1;
}
function rolld100() {
    return Math.floor(Math.random() * 100);
}
function RollLoot() {
    var Loot;
    Loot += (rolld100().toString() + " ");
    document.getElementById("LootBox").innerHTML = Loot;
}