const custom_alert = (message) => {
    const alert_popup = document.createElement('div')
    alert_popup.classList.add("popup")
    alert_popup.innerHTML = `<h3>La page indique</h3><p>${message}<p>`
}


const con = () => {
    let clickcount=prompt("Choisis un nombre entre 100 et 1000")
    while (!(100<=clickcount && clickcount<=1000)) {
        clickcount = prompt(`Choisis un nombre entre 100 et 1000 pas ${clickcount}`)
    }
    for (let i = 0; i < clickcount; i++) {
        alert(`Maintenant tu va cliquer comme un con encore ${clickcount - i} fois`)
        setTimeout(1000)
    }
    if (Math.floor(Math.random() * (2 - 1)) + 1==1) {
        document.getElementById("image").innerHTML = "<img src=\"bon-toutou.png\">";
    }
    else {
        document.getElementById("image").innerHTML = "<img src=\"bon-toutou-2.png\">";
    }
}
