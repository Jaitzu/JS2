let vuosi;

vuosi = prompt('Anna vuosiluku');

if(vuosi % 4 != 0){
  document.write('Vuosi on karkausvuosi');
}

else if(vuosi % 400 == 0) {
  document.write('Vuosi on  karkausvuosi');
}

else if(vuosi % 100 ==0){
  document.write('Vuosi ei ole karkausvuosi');
}

else{
  document.write('Vuosi on karkausvuosi');
}