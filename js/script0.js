function randomIntFromInterval(min, max) { // min and max included
  return (Math.random() * max) + min;
}

console.log(randomIntFromInterval(0.001, 0.005));

$(document).ready(function () {
    setInterval(function () {
        if ($('.trans__transaction').length == 4) {
            $('.trans__transaction').first().remove();
        }

        // var crypts = ["ETH", "BTC"];
        var crypts = ["BTC"]
        let value = "";
        let fee = "";

        var crypt = crypts[Math.floor(randomIntFromInterval(0, crypts.length))]

        if (crypt == "BTC") {
          value = randomIntFromInterval(0.1, 5).toFixed(2);
          fee = randomIntFromInterval(0.0001, 0.0005);
        } else if (crypt == "ETH") {
          value = randomIntFromInterval(1, 50).toFixed(2);
          fee = randomIntFromInterval(0.005, 0.04);
        }

        var hash = "";
        var fromWallet = "";
        var toWallet = "";
        var hashVal = "bacfed0123456789";
        var randEth = (Math.random() * (20000 - 10000) + 10000).toFixed();

        for (var i = 0; i < 10; i++) {
            hash += hashVal["charAt"](Math["floor"](Math["random"]() * hashVal["length"]));
        }
        for (var i = 0; i < 6; i++) {
            fromWallet += hashVal["charAt"](Math["floor"](Math["random"]() * hashVal["length"]));
        }
        for (var i = 0; i < 6; i++) {
            toWallet += hashVal["charAt"](Math["floor"](Math["random"]() * hashVal["length"]));
        }
        hash += '..';
        fromWallet += '..';
        toWallet += '..';
        $('.trans__table-head').after('<div class="trans__table-row"><div class="trans__table-hash"><div class="trans__text">' + hash + '</div></div><div class="trans__table-block"><div class="trans__text">' + (Math.random() * (999999 - 100000) + 100000).toFixed() + '</div></div><div class="trans__table-from"><div class="trans__text">0xc45A...</div><div class="trans__text">0tc45C...</div></div><div class="trans__table-empty"><img class="trans__confirm" src="img/trans__confirm.svg" alt="CONFIRM"></div><div class="trans__table-to"><div class="trans__text">' + fromWallet + '</div><div class="trans__text">' + fromWallet + '</div></div> <div class="trans__table-age"><div class="trans__text">right now</div><div class="trans__text">right now</div></div><div class="trans__table-value">' + `<div class="trans__text">${value * 2} ${crypt}</div><div class="trans__text">${value} ${crypt}</div>` + `</div><div class="trans__table-fee"><div class="trans__text">${fee}</div></div><div class="trans__table-status trans__table-status-text">Completed</div></div>`);
    }, 7500);
});
