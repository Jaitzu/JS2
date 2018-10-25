let nimi;
let numero;

nimi =  prompt('Mikä on nimesi ');
numero = (Math.random() * (4 - 1) +1).toFixed();

if (numero == 1){
  document.write(nimi + ' olet Rohkelikko!');
}

else if (numero == 2){
  document.write(nimi + ' olet Korpinkynsi!');
}

else if (numero == 3){
  document.write(nimi + ' olet Puuskupuh!');
}

else{
  document.write(nimi + ' olet Luihuinen!');
}