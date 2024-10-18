// Kullanıcıya kaç adet sayı girmek istediğini soralım.
// Vereceği cevaba göre kullanıcıdan sayıları alalım.
// Cevaplar sayilar dizisine eklensin.
// Kullanıdan alınan sayılar çift ise ayrı toplayıp cevabını yazdıralım, tek ise ayrı toplayıp cevabını yazdıralım.

let sayilar = [];

let adet = parseInt(prompt("Kac adet sayi girmek istiyorsunuz?"));

for (let i = 0; i < adet; i++) {
  let sayi = parseInt(prompt("Bir sayi giriniz:"));
  sayilar.push(sayi);
}
let ciftToplam = 0;
let tekToplam = 0;

for (let sayi of sayilar) {
  if (sayi % 2 === 0) {
    ciftToplam += sayi; 
  } else {
    tekToplam += sayi; 
  }
}
console.log("Çift sayilarin toplami: " + ciftToplam);
console.log("Tek sayilarin toplami: " + tekToplam);
