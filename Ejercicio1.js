function numerosPrimos(){
    let numeros = [];
    for(let i = 1;  numeros.length < 10;i++){
        let divisores = []
        for(let j = i;j > 0;j--){
            if( i % j == 0){
                divisores.push(j);
            } 
        }
        if(divisores.length <= 2){
            numeros.push(i);
        }
    }

    alert("Los numeros son:" + numeros)
}


//numeros.length <= 1