function raschitat() {
let type  = document.getElementById('type').value;
switch (type) {
   case "sintetika":
      cena = 10000;
      break;
   case "sherst":
      cena = 10000;
      break;  
    case "kovrolan":
      cena = 10000;
      break;
      case "shelk":
      cena = 15000;
      break;
      case "viskoz":
      cena = 15000;
      break;
   default:
      cena = 15000;
}
shirina  = document.getElementById('shirina').value;
dlina  = document.getElementById('dlina').value;
if(shirina == ""){
alert("Бўйини киритмагансиз!");
} else if(dlina == ""){
alert("Энини киритмагансиз!");
} else {
ploschad = parseFloat (shirina)* parseFloat (dlina);
document.getElementById('ploschad').innerHTML = "Гиламингиз майдони: "+ ploschad +" кв. м.";
stoimost = ploschad*cena;
document.getElementById('stoimost').innerHTML = "Тахминий ювиш нархи: "+ stoimost +" сўм";
}
}

