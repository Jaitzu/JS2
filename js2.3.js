let suku;
let arvo;

suku = prompt('Mikä on biologinen sukupuolesi');
arvo = prompt('Anna hemoglobiini arvosi ');

if(suku == 'mies'){
  if(arvo >= 134 && arvo <= 195 ){
    document.write('Hemoglobiini arvo normaali');
  }
  else if(arvo <= 134  ){
    document.write('Hemoglobiini arvo alhainen');
  }
  else{
    document.write('Hemoglobiini arvo korkea');
  }
}

 else if(suku == 'nainen'){
  if(arvo >= 117 && arvo <= 175 ){
    document.write('Hemoglobiini arvo normaali');
  }
  else if(arvo <= 117  ){
    document.write('Hemoglobiini arvo alhainen');
  }
  else{
    document.write('Hemoglobiini arvo korkea');
  }
}

else{
  document.write('En tiedä');
}