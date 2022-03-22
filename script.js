const number_element1 = document.getElementById('total1');
const number_element2 = document.getElementById('total2');
const number_element3 = document.getElementById('total3');

function mais(){
    var atual = document.getElementById('total1').value;
    var novo = atual - (-1);
    document.getElementById('total1').value = novo;
}
function menos(){
    var atual = document.getElementById('total1').value;
    if(atual > 0) {
        var novo = atual - 1;
        document.getElementById('total1').value = novo;
    }
}








