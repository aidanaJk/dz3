var dannye = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк"]
var resultat = {}

for (var i = 0; i < dannye.length; i++) {
    var type = typeof dannye[i]
    if (!resultat[type]) {
        resultat[type] = []
    }
    resultat[type].push(dannye[i])
}

var Sortirovka = Object.values(resultat).sort((a,b) => b.length - a.length)

console.log(Sortirovka)
