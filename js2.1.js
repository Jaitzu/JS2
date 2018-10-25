let mitta;
let alaraja = 37;
let puuttuva;

mitta = prompt('Anna kuhan pituus senttimetreinä: ');
if (mitta < alaraja) {
  puuttuva = alaraja - mitta;
  document.write('Alimmasta pyyntimitasta puuttuu ' + puuttuva + 'cm');
}
