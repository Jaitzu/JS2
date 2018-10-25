let lompakko;
let lippu;

lompakko = prompt('Kuinka paljon lompakossa on rahaa?');
lippu = prompt('Kuinka paljon lippu maksaa?');
 if (lompakko >= lippu){
   lompakko = lompakko - lippu;
   document.write('Hyvää matkaa!');
 }
 else{
   document.write('<br>' + 'EE OOLE RAHAAA');
 }

 document.write('<br>' + 'Lompakossa olevat rahat ' + lompakko + '€');