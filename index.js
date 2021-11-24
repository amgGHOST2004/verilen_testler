function soru(yazi,secim,cevap){
    this.yazi = yazi;
    this.secim = secim;
    this.cevap = cevap;
}

soru.prototype.cevapDogrula = function(cevap){
    return this.cevap === cevap;
}

function sınav(sorular){
    this.sorular = sorular;
    this.skor = 0;
    this.soruIndex = 0;
}

sınav.prototype.sorual= function(){
    return this.sorular[this.soruIndex];
}

sınav.prototype.bittimi = function(){
    return this.sorular.length === this.soruIndex;
}

sınav.prototype.Bil = function(cevap){
    var soru = this.sorual();


    if(soru.cevapDogrula(cevap)){
        this.skor++;
    }
    this.soruIndex++;
};

var q1 = new soru("En iyi programlama dili hangisidir?",["javascript","c#","pyhton","asp.net"],"javascript");
var q2 = new soru("En modern programlama dili hangisidir?",["nodejs","c#","visual basic","javascript"],"nodejs");
var q3 = new soru("En popüler programlama dili hangisidir?",["javascript","c#","pyhton","asp.net"],"javascript");

var sorular = [q1,q2,q3];

var sinav = new sınav(sorular);

loadTest();

function loadTest(){
    if(sinav.bittimi()){
        skorGöster();
    }
    else{
        var soru = sinav.sorual();
        var cevap = soru.secim;
        document.querySelector('#soru').textContent = soru.yazi;
        for(var i=0; i<cevap.length;i++){
            var element = document.querySelector('#secenek'+i);
            element.innerHTML = cevap[i];
            bil('btn'+i,cevap[i]);
        }
        ilerlemeGöster();
    }
}

function bil(id,tahmin){
    var btn = document.getElementById(id);
    btn.onclick = function(){
        sinav.Bil(tahmin);
     loadTest();   
    }
}

function skorGöster(){
    var html = `<h2>Skor</h2><h4>${sinav.skor}</h4>`;
    document.querySelector('.card-body').innerHTML = html;
}

function ilerlemeGöster(){
    var toplamSoru = sinav.sorular.length;
    var soruSayisi = sinav.soruIndex+1;
    document.querySelector('#ilerleme').innerHTML = 'Soru ' + soruSayisi + ' of ' + toplamSoru;
}