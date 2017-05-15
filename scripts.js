$(function(){
function Telefon(marka, cena, kolor) {
	this.marka = marka; 
	//dzięki użyciu this, właściwość "marka" obiektu, który stworzymy, przyjmie wartość argumentu marka
	this.cena = cena;
	this.kolor = kolor;
}
Telefon.prototype.printInfo = function() {
		console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}
var iPhone6S = new Telefon("Apple", 2250, "srebrny");
var galaxyS6 = new Telefon("Samsung Galaxy S6", 8250, "czarny");
var onePlus = new Telefon("OnePlus One", 2+" zika", "zielony");
iPhone6S.printInfo();
galaxyS6.printInfo();
onePlus.printInfo();
});