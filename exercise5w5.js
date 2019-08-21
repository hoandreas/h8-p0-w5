function kaliTerusRekursif(angka) {
    var toStr = angka.toString();

    if(toStr.length > 0) {
        return parseInt(toStr[0]) * kaliTerusRekursif(toStr.slice(1));
    } else {
        return 1;
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 36
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); //120
  console.log(kaliTerusRekursif(1231)); // 6