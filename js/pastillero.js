let pastillero=[];
card-title.innerClass ; title
const input = document.querySelectorAll  ('input[type="text"'),
btnEnviar= document.querySelector('#btnEnvia')

function hacerClick(){
  console.log("Enviaste el contenido");
}
btnEnviar.addEventListener('click', hacerClick);

/*btnEnviar.onclick = () =>{
  console.log("Enviaste el cotenido");
}*/

btnEnviar.addEventListener('click', () =>{
  console.log(input[0].value);
})
btnEnviar. addEventListener('click', ()=>{
  console.log(input[0], value),
card-title.innerClass ; input[0].value
});











/*class Pastillero {
    constructor(remedio, opcion, horario) {
      this.remedio = remedio;
      this.opcion = opcion;
      this.horario = horario;
    
    }
  }
const itemPastillero = document. getElementsByClassName ("pastillero");
console.log(itemPastillero);
for (pastillero of itemPastillero) 
    console.log(pastillero.innerText);



localStorage.setItem("pastillero", JSON.stringify(pastillero));

const actualizar = (_remedio, _opcion, _horario, _img)=>{
    let pastilleroStorage = localStorage.getItem("pastillero");
    let data = JSON.parse(pastilleroStorage);
    let encontrado = data.find((item)=> item.remedio === _remedio);
    encontrado._opcion = nuevoOpcion;
    encontrado._horario = nuevoHorario;

    localStorage.setItem("pastillero", JSON.stringify(data));
};
let _remedio = prompt("Ingrese el nombre del medicamento a actualizar en el pastillero");
let _opcion = prompt("Ingrese el día");
let _horario = parseInt(prompt("Ingrese el horario que debe tomar el medicamento"));

actualizar(_remedio,_opcion,_horario,_img);*/
