function calc(){
    var quo = document.getElementById('quo').value;
    var divis = document.getElementById('divis').value;
    var resto = document.getElementById('resto').value;
    var divid = document.getElementById('divid').value;
    var result = 0;
    var res = document.getElementById('res');

    result = (parseInt(quo) * parseInt(divis)) + parseInt(resto);
    console.log(result);

    if(result == divid){
        res.style.fontWeight = "bold"
        res.style.color = "green";
        res.innerHTML = `Parabéns o resultado está correto! \u{1F947}`;
    }else{
        res.style.fontWeight = "bold"
        res.style.color = "red";
        res.innerHTML = `Infelizmente o resultado está incorreto. \u{26D4}`;
    }
}