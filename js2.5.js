let tosiepa;
let luku;
let neliöjuuri;

tosiepa = window.confirm('Lasketaanko neliöjuuri?');
if(tosiepa == true) {
  luku = prompt('Anna luku ');
  if (luku >= 0) {
    neliöjuuri = Math.sqrt(luku);
    document.write('Luvun neliöjuuri = ' + neliöjuuri);
  }
  else{
    document.write('Negatiivisen luvun neliöjuuri ei ole määrielty');
  }
}
else{
  document.write('Elä sitte! >:(');
}