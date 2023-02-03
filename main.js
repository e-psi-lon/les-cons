function con() {
    let clickcount=prompt("Choisis un nombre entre 100 et 1000")
    while (!(100<=clickcount && clickcount<=1000)) {
        clickcount = prompt(`Choisis un nombre entre 100 et 1000 pas ${clickcount}`)
    }
    for (let i = 0; i < clickcount; i++) {
        alert(`Maintenant tu va cliquer comme un con encore ${clickcount - i} fois`)
        setTimeout(1000)
    }
    document.getElementById("image").innerHTML = "<img src=\"bon-toutou.webp\">";
}
