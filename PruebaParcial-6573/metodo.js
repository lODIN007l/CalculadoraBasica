function sumarespes (){
    var a =parseFloat (document.getElementById("dato1op").value);
    var b =parseFloat (document.getElementById("dato2op").value);
    var respuesta=a+b
    document.getElementById("respuest1").innerHTML=respuesta;
}
function restaRes () {
    var a =parseFloat (document.getElementById("dato1op").value);
    var b =parseFloat (document.getElementById("dato2op").value);
    var respuesta=a-b
    document.getElementById("respuest1").innerHTML=respuesta;
}
function multiplicacionres () {
    var a =parseFloat (document.getElementById("dato1op").value);
    var b =parseFloat (document.getElementById("dato2op").value);
    var respuesta=a*b
    document.getElementById("respuest1").innerHTML=respuesta;
}
function divisionres () {
    var a =parseFloat (document.getElementById("dato1op").value);
    var b =parseFloat (document.getElementById("dato2op").value);
    var respuesta=a/b
    document.getElementById("respuest1").innerHTML=respuesta;
}

function porselector() {
    document.querySelector('#botoncalculo').addEventListener('click', () =>{
        var a =parseFloat (document.getElementById("dato1op").value);
        var b =parseFloat (document.getElementById("dato2op").value);
        const op2 = document.querySelector('#op').value;
        let r;
        if(op2 == '+'){
            r = a + b;
        }else if( op2 == '-'){
            r = a - b;
        }else if(op2 == '*'){
            r = a * b;
        }else if(op2 == '/'){
            r = a / b;
        }
        document.getElementById("respuest1").innerHTML=r;
    });
    
}
