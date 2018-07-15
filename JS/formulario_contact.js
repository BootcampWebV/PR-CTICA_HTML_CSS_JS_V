
/*var form = document.getElementsByName('contact')[0];


var nombreInput = document.getElementById("name");
var emailoInput= document.getElementById('email');
var opcionoInput = document.getElementById('selection');
var phoneoInput = document.getElementById('phone');
var messageoInnput = document.getElementById('message');
var submitButton = document.getElementById('send')




form.addEventListener('click', function(event){

if (nombreInput.checkValidity() === false){

    
    alert("tienes que escribir tu nombre puto");
    event.preventDefault();
    
}

if (emailoInput.checkValidity() === false){

    alert("tienes que escribir tu email");
    event.preventDefault();
    
} 
});*/

var botonEnviar = document.querySelector('#send');
botonEnviar.addEventListener('click', validar);



function validar (event){
var nombreInput = document.getElementById('name').value;
var emailInput= document.getElementById('email').value;
var opcionInput = document.getElementById('selection').value;
var phoneInput = document.getElementById('phone').value;
var messageInput = document.getElementById('message').value;

var expresion = /\w+@\w+\.+[a-z]/;
var expresionPhone = /^([0-9]+){9}$/;


if(nombreInput=== "" || emailInput === "" || opcionInput ==="" || phoneInput === "" || messageInput===""){
 alert("Todos los campos son obligatorios");
 event.preventDefault();
 return false;
 

}else if (!expresion.test(emailInput)){
alert("El formato del email no es válido : hola@xxx.com");
event.preventDefault();
return false;

}else if(!expresionPhone.test(phoneInput)){
    alert("El número de teléfono no es válido : introduce 9 dígitos");
    event.preventDefault();
    return false;

} else if (contarPalabras(messageInput) > 150){
    alert("Máximo 150 palabras");
    event.preventDefault();
    return false;
}


}

function contarPalabras (texto) {
    var replaceEspacios = texto.replace(/\s\s+/g, ' ').trim();
    var arrayPalabras = replaceEspacios.split(' ');
    var numeroPalabras = arrayPalabras.length;
    return numeroPalabras;
}


var selectivo = document.getElementById('selection')[2]
selectivo.addEventListener("click", function (){
  
   console.log("Estoy en otros");
   /*var o = document.createElement("input");
					o.type = "text";
					o.name = "lalala";
					o.value = "";
					document.getElementById("aqui").appendChild(o);


    if(selectivo){
    //var input = document.createElement("input");
    //input.setAttribute("type", "text");

    }*/
})

/*var opcionOtros = document.createElement("input");
	opcionOtros.setAttribute("id", "conocido_otro");
	opcionOtros.setAttribute("type", "text");
	opcionOtros.setAttribute("name", "conocido_otro");
	opcionOtros.setAttribute("placeholder", "Otro...");
	opcionOtros.setAttribute("required", "");

	opcionInput.change(function(event) {
		if (( "select option:selected" ).value === 'otros') {
			opcionInput.after( opcionOtros);
		} else {
			if('#conocido_otro'.length) {
				'#conocido_otro'.remove();
			}
		}
	})*/

