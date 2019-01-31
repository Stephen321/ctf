var sa = [..."jllnunajcxa"]; 
for (var n = 0; n < 100; n++) {
    console.log(sa.map(x => String.fromCharCode(97 + ((n + x.charCodeAt()) % 26))).join('')); 
}
