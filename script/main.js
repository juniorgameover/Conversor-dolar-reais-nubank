var mostraResult = document.querySelector('#resultado');


function calculaPreco(){

    event.preventDefault();
    
    let custoprod = document.querySelector('#custo-produto').value;
    let ptax = document.querySelector('#ptax').value;
    const iof = 0.0638
    var reais = 0

    reais = custoprod * (ptax * 1.04);
    reais = (reais + (reais*iof));



   
    mostraResult.textContent = "R$ "+reais.toFixed(2)
}
