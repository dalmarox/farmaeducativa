export const pastillero =[
    {
        id:1,
        remedio,
        opcion,
        horario,
        img,

    }
]








JSON.parse(localStorage.getItem("pastillero")) || localStorage.setItem("pastillero",JSON.stringify(pastillero));




