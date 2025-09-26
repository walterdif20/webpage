document.getElementById("boleta").style.display="none";
main();


function main(){
	document.getElementById('calcular').onclick = function calcular(){
	var suma = 0;
	for(i=1; i<11 ; i++){
		idElemX = i+'p'+'X';
		suma += Number(document.getElementById(idElemX).value);		
	}
	document.getElementById('totalX').value = suma;
}
	document.getElementById("mostrar").onclick = function mostrar(){

		var form = document.getElementById("formulario").innerHTML;	
		generar();
		document.getElementById("formulario").innerHTML = document.getElementById("boleta").innerHTML;
		


		document.getElementById("print").onclick = function print(){
				document.getElementById("print2").style.visibility = "hidden";
				document.getElementById("modificar").style.visibility = "hidden";
				window.print();
				setTimeout(function(){
				document.getElementById("print2").style.visibility = "visible";
				document.getElementById("modificar").style.visibility = "visible";},10000)
		}	

		document.getElementById("modificar").onclick= function modificar(){
				document.getElementById("formulario").innerHTML = form;
				editar();
				main();
		}
}

}

function generar(){
	document.getElementById("clienteY").innerHTML = document.getElementById("clienteX").value;
	var idElemY = '';
	var idElemX = '';
	for(i=1; i<11 ; i++){
		idElemX = i+'e'+'X';
		idElemY = i+'e'+'Y';
		if(document.getElementById(idElemX).value!=''){
		document.getElementById(idElemY).innerHTML = document.getElementById(idElemX).value;}
		
		idElemX = i+'p'+'X';
		idElemY = i+'p'+'Y';
		if(document.getElementById(idElemX).value!=''){
		document.getElementById(idElemY).innerHTML = '$' + document.getElementById(idElemX).value;}
		
		idElemX = i+'c'+'X';
		idElemY = i+'c'+'Y';
		document.getElementById(idElemY).innerHTML = document.getElementById(idElemX).value;
	}
	document.getElementById('totalY').innerHTML = document.getElementById('totalX').value;
	document.getElementById('detallesY').innerHTML = document.getElementById('detallesX').value;
	document.getElementById('fechaY').innerHTML = document.getElementById('fechaX').value;
	document.getElementById('vehiculoY').innerHTML = document.getElementById('vehiculoX').value;
	document.getElementById('marcaY').innerHTML = document.getElementById('marcaX').value;
}
function editar(){
	document.getElementById("clienteX").value = document.getElementById("clienteY").innerHTML;
	var idElemY = '';
	var idElemX = '';
	for(i=1; i<11 ; i++){
		idElemX = i+'e'+'X';
		idElemY = i+'e'+'Y';
		document.getElementById(idElemX).value = document.getElementById(idElemY).innerHTML;
		
		idElemX = i+'p'+'X';
		idElemY = i+'p'+'Y';
		document.getElementById(idElemX).value = document.getElementById(idElemY).innerHTML;
		
		idElemX = i+'c'+'X';
		idElemY = i+'c'+'Y';
		document.getElementById(idElemX).value = document.getElementById(idElemY).innerHTML;
	}
	document.getElementById('totalX').value = document.getElementById('totalY').innerHTML;
	document.getElementById('detallesX').value = document.getElementById('detallesY').innerHTML;
	document.getElementById('fechaX').value = document.getElementById('fechaY').innerHTML;
	document.getElementById('vehiculoX').value = document.getElementById('vehiculoY').innerHTML;
	document.getElementById('marcaX').value = document.getElementById('marcaY').innerHTML;
}


