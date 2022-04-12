const resultBox = document.querySelector('.result-box');
resultBox.classList.add('non-display');
var submit = document.querySelector('.sub');

var roll = document.querySelector('.roll');
var batch = document.querySelector('.batch');
const res = document.querySelector('.result');
const list = new Array(250);
var batch1 = 0, batch2 = 0;
for(var i = 0 ; i < 250 ; i++){
    list[i] = 0;
}
submit.addEventListener('click',()=>{
    // alert(list.length);
    list[roll.value]++;
    if(batch.value == 1){
        batch1++;
    }else if(batch.value == 2){
        batch2++;
    }
    roll.value = '';
    batch.value = '';
})
