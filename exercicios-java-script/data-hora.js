let dataAtual = new Date();
let horas = dataAtual.getHours();
let minutos = dataAtual.getMinutes();
let segundos = dataAtual.getSeconds();

function comecar(textoDeEntrada){
        if(textoDeEntrada == undefined){
               console.log('[...]');
        }else{
                horaFormatada = (`${horas}:${minutos}:${segundos}`)
                numero = textoDeEntrada;
                console.log(`${numero}  ${horaFormatada}`)
        }
}
comecar('Horario:')

let quadrado = (num) => num * num;

console.log(quadrado(3));

function quadrado(n){
        let num = n;
        num *= num;
        console.log(num);
}
quadrado(10);
console.log(typeof(quadrado));

console.log(screen.width)
