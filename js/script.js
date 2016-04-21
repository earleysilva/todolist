window.onload
{
		function myFunction()
			{

				// if(localStorage){
				// alert("Si tienes LocalStorage");
				// }else{
				// alert("No tienes LocalStorage");
				// }

        var table = document.getElementById("myTable");
        var nuevaTarea    = document.getElementById('todoInput').value
			  var fechaT = document.getElementById("fechaTarea").value;

				var items=
					{"tareas":[
						{"tarea":nuevaTarea,"fecha":fechaT}
					]};
  			localStorage.setItem(guid(), JSON.stringify(items))
	//		localStorage.setItem(guid(),items.tareas);

				var fila = table.insertRow(1);

				var celda1 = fila.insertCell(0);
				var x = document.createElement("INPUT");
				x.setAttribute("type", "checkbox");
				x.name="chkbox";
				x.setAttribute("id","micheack");
				x.setAttribute("onclick","estadoC()");
				celda1.appendChild(x);

				var celda2 = fila.insertCell(1);
				var celda3 = fila.insertCell(2);

				celda2.innerHTML = nuevaTarea;
				celda3.innerHTML = fechaT;

}
//basado en http://help.dottoro.com/ljsxemjj.php
function estadoC() {
	var a=	document.getElementById('micheack');
	var C="";
            if (a.checked) {
                //alert ("activo");
						    c="activo";
								console.log(c);
            }
            else {
                //alert ("inactivo");
								 c="inactivo";
							console.log(c);
            }
        }

//ejercicio en realizado en clase
//http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
			var guid = function guid()
				 {
							function _p8(s) {
									var p = (Math.random().toString(16) + "000000000").substr(2, 8);
									return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
							}
							return _p8() + _p8(true) + _p8(true) + _p8();
					};

}
