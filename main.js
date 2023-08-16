// Proyecto llamado Farmaeducativa.

let div = document.getElementById("aplicacion");
console.log(div. innerHTML);

function identificarUsuarios() {
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");

  if (nombre != "" && apellido != "") {
    alert("Hola" + " " + nombre + " " + apellido);
  } else {
    alert("El nombre y el apellido deben ser ingresados");
  }
}
identificarUsuarios();

function identificarRegistrar() {
  let email = prompt("Ingrese su email");
  console.log(email);
  alert("Su mail es" + " " + email);
  let direccion = prompt("Dirección");
  let ciudad = prompt("Ciudad");
  let pais = prompt("pais");
  console.log(pais);
  alert(pais);
  let codigoPostal = parseInt(prompt("Código Postal"));
  console.log(codigoPostal);
  alert("CP" + " " + codigoPostal);

  consultar();
}
function consultar() {
  let consulta = prompt("Deja su consulta");
  console.log(consulta);

  pedirTurno();
}
function pedirTurno() {
  let turno = prompt("¿Quiere sacar un turno para una consulta?");
  if (turno === "si") {
    console.log(turno);
    alert("complete sus datos");
    for (let turno = 1; turno <= 3; turno++) {
      let apellido = prompt("Ingrese su Apellido y Nombre");
      alert(
        `turno ${turno} : ${apellido}` +
          " " +
          "tienes" +
          " " +
          (turno - 1) +
          " " +
          "personas antes"
      );
    }
    pedirTurno();
  }
  alert("Se acabaron los turnos");
}

identificarRegistrar();

function ingresoMedicamento() {
  let remedio = prompt(
    "Ingresa el nombre del medicaamento, si quieres salir escribe ESC"
  ).toLowerCase();
  console.log(remedio);

  while (remedio != "ESC") {
    console.log("Ingresaste" + " " + remedio);

    let pregunta = prompt(
      "¿Tu medicación es en comprimidos? Responder SI O NO"
    ).toLowerCase();

    switch (pregunta) {
      case "si":
        let miligramos = parseFloat(
          prompt("¿Cuántos miligramos tiene un comprimido")
        );
        console.log(miligramos);
        alert("Cada comprimido tiene" + " " + miligramos + " " + "mg");

        let comprimidos = parseFloat(
          prompt("Ingrese cantidad de comprimidos en una caja")
        );
        console.log(comprimidos);
        alert("Cada caja tiene" + " " + comprimidos + " " + "comprimidos");

        let y = multiplicacion(miligramos, comprimidos, remedio);
        function multiplicacion(miligramos, comprimidos) {
          return miligramos * comprimidos;
        }
        multiplicacion(y);
        console.log(y);
        alert("En una caja tienes" + " " + y + " " + "mg de " + remedio);

        break;

      case "no":
        let medicamento = prompt("¿Qué fármaco te recetó el médico?");
        console.log(medicamento);
        alert(medicamento);
        let mililitros = parseFloat(
          prompt("¿Cuántos mililitros tiene el frasco?")
        );
        console.log(mililitros);
        alert(" Cada frasco tiene" + " " + mililitros + " " + "ml");

        let dosis = parseFloat(
          prompt(
            "¿Cuál es la dosis por kilogramo de peso de la persona y por día?"
          )
        );
        console.log(dosis);
        alert("La dosis por kilogramo de peso es" + " " + dosis + " " + "mg");

        let pesoPersona = parseFloat(prompt("¿Cuál es el peso de la persona?"));
        console.log(pesoPersona);

        alert("La persona" + " " + "pesa" + " " + pesoPersona + " " + "kg");

        let vasitoMg = parseFloat(
          prompt(
            "cantidad de mg que hay en 5 ml, ( mirar en la caja del jarabe)"
          )
        );
        console.log(vasitoMg);
        alert("En 5 ml hay" + " " + vasitoMg + " " + "mg");

        let x = reglaTres(dosis, pesoPersona, vasitoMg, medicamento);

        function reglaTres(dosis, pesoPersona, vasitoMg, medicamento) {
          return (((dosis * pesoPersona) / 3) * 5) / vasitoMg;
        }
        reglaTres(x);
        console.log(x);
        alert("el resultado es" + " " + x + " " + "ml de" + " " + medicamento);

        break;
      default:
        console.log("Fin");
        break;
    }

    remedio = prompt("Ingresa el nombre del fármaco o  ESC para salir");
  }
}
ingresoMedicamento();
 

let contraseña = "1234";
function login() {
  let ingresar = false;

  for (let i = 2; i >= 0; i--) {
    let userContraseña = prompt(
      "Ingresa la contraseña. Tenés " + (i + 1) + " " + "Oportunidades"
    );
    if (userContraseña === contraseña) {
      alert("Ingreso exitoso");
      ingresar = true;
      break;
    } else {
      alert("Error.Te quedan" + " " + i + "intentos");
    }
  }
  return ingresar;
}
console.log(login());

let exito = login();

class Pastillero {
  constructor(remedio, opcion, horario) {
    this.remedio = remedio;
    this.opcion = opcion;
    this.horario = horario;
    this.img = img;
  }
}

if (exito) {
  crearPastillero();
} else {
}
const pastillero = new Pastillero(remedio, opcion, horario, img);

const arrayPastilleros = [];

function crearPastillero() {
  let opcion = prompt(
    "Elegí una opción:\Lunes. \Martes. \Miércoles. \Jueves. \Viernes. \Sábado. \Domingo. \n Presiona X para finalizar."
  );
  let remedio = prompt(
    "Ingresa el nombre del medicamento a ingresar en el pastillero"
  );
  let horario = parseInt(prompt("Ingresa la hora a tomar el medicamento"));

  console.log(opcion);
  console.log(remedio);

  alert(
    "El medicamento ingresado el día" +
      " " +
      opcion +
      " " +
      "es:" +
      " " +
      remedio +
      " " +
      "y lo tiene que tomar a las" +
      " " +
      horario
  );
  switch (opcion) {
    case "1":
      alert("Ingreso" + "" + remedio);
      break;
    case "2":
      alert("Ingreso" + " " + remedio);
      break;
    case "3":
      alert("Ingreso" + " " + remedio);
      break;
    case "4":
      alert("Ingreso" + " " + remedio);
      break;
    case "5":
      alert("Ingreso" + " " + remedio);
      break;
    case "6":
      alert("Ingreso" + " " + remedio);
      break;
    case "7":
      alert("Ingreso" + " " + remedio);
      break;
    default:
      alert("No válida");
      break;
  }
  const ingresarOtro = confirm("Desea ingresar otro medicamento?");

  if (ingresarOtro) {
    crearPastillero();
  } else {
    registrarPresion();
  }



  const pastillero = new Pastillero(remedio, opcion, horario);

  arrayPastilleros.push(pastillero);
  console.log(arrayPastilleros);
  for( let i=lunes ; i< arrayPastilleros.length; i++){
    console.log(arrayPastilleros[i]);
  }
}

class presionArterial {
  constructor(
    valorMax,
    _ValorMin,
    dia,
    horarioMañana,
    horarioTarde,
    horarioNoche,
    date,
  ) {
    this.dia = dia;
    this.valorMax = valorMax;
    this.valorMin = valorMin;
    this.horarioMañana = horarioMañana;
    this.horarioTarde = horarioTarde;
    this.horarioNoche = horarioNoche;
    this.date= date;
    
  }
}
if (exito) {
  registrarPresion();
} else {
}
const arrayPresionArterial = [];

function registrarPresion() {
  let dia = prompt(
    "Elegí una opción:Lunes. Martes. Miércoles. Jueves. Viernes. Sábado. Domingo. \n Presiona X para finalizar."
  );
  let valorMax = parseFloat(
    prompt("Indica el valor de la presión arterial máxima")
  );
  let valorMin = parseFloat(
    prompt("Indica el valor de la presión arterial minima")
  );
  let horario = prompt(
    "Indica el momento del día en que se tomó la presión arterial: Mañana. Tarde. Noche. \n Presiona X para finalizar."
  ).toLowerCase();
  let date = parseFloat(prompt("Indica la hora del la toma del medicamneto"))
  console.table(date.toLocaleString());
  console.table(dia);
  console.table(valorMax);
  console.table(valorMin);
  console.table(horario);

  alert(
    "el registro de presión arterial el" +
      " " +
      dia +
      " " +
      "a la" +
      " " +
      horario +
      "es" +
      " " +
      valorMax +
      "- " +
      valorMin +
      " " +
      "mm Hg"
  );
  switch (dia) {
    case "1":
      alert(
        "Su presión es:" +
          " " +
          valorMax -
          valorMin +
          " " +
          "mm de Hg" +
          "a la" +
          " " +
          horario
      );
      break;
    case "2":
      alert(
        "Su presión es:" +
          " " +
          valorMax -
          valorMin +
          " " +
          "mm de Hg" +
          "a la" +
          " " +
          horario
      );
      break;
    case "3":
      alert(
        "Su presión es:" +
          " " +
          valorMax -
          valorMin +
          " " +
          "mm de Hg" +
          "a la" +
          " " +
          horario
      );
      break;
    case "4":
      alert(
        "Su presión es:" +
          " " +
          valorMax -
          valorMin +
          " " +
          "mm de Hg" +
          "a la" +
          " " +
          horario
      );
      break;
    case "5":
      alert(
        "Su presión es:" +
          " " +
          valorMax -
          valorMin +
          " " +
          "mm de Hg" +
          "a la" +
          " " +
          horario
      );
      break;
    case "6":
      alert(
        "Su presión es:" +
          " " +
          valorMax -
          valorMin +
          " " +
          "mm de Hg" + " " +
          "a la" +
          " " +
          horario
      );
      break;
    case "7":
      alert(
        "Su presión es:" +
          " " +
          valorMax -
          valorMin +
          " " +
          "mm de Hg" + " "+
          "a la" +
          " " +
          horario
      );
      break;
    /*default:
      alert("No válida");
      break;*/
  }
  const registrarOtraPresion = confirm(
    "Desea ingresar otro registro de presión arterial?"
  );
  if (registrarOtraPresion) {
    registrarPresion();
  } else {
  }
  const presionArterial = new presionArterial(dia, valorMax, valorMin, horario);
  arrayPresionArterial.push(presionArterial);
  console.table(arrayPresionArterial);
 
   alert(
    "Registro de presión arterial:" +
      " " +
      dia +
      " " +
      horario +
       " " +
      valorMax +
      " " +
      valorMin +
     " " +
      "mm Hg"
  );

  }
  const fecha= new Date()
  console.log(fecha);
  console.log(fecha.toLocaleString());
 