var User = /** @class */ (function () {
    function User(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.carica = 0;
        this.numeroChiamate = 0;
    }
    User.prototype.ricarica = function (unaRicarica) {
        this.carica += unaRicarica;
    };
    User.prototype.chiamate = function (minutiDurata) {
        var costoChiamate = minutiDurata * 0.20;
        if (costoChiamate > this.carica) {
            console.log("il tuo credito è insufficente");
        }
        else {
            this.carica -= costoChiamate;
            this.numeroChiamate++;
        }
    };
    User.prototype.numero404 = function () {
        return this.carica;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzaraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var firstUser = new User("Pippo", "Franco");
var secondUser = new User("Max", "Power");
var thirdUser = new User("Ash", "Kittr");
firstUser.ricarica(15);
firstUser.chiamate(5);
firstUser.chiamate(3);
secondUser.ricarica(20);
console.log(firstUser);
console.log(secondUser);
console.log(thirdUser);
