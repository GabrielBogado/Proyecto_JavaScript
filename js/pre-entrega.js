debugger
let nombre = ""
let edad = ""

inicio()

if(edad>=18){
    console.log("Bienvenido", nombre)
    opciones()
}else{
    console.warn("No se admite la venta a menores de 18 años")
    inicio()
}

function inicio(){
nombre = prompt("Ingrese nombre: ")
edad = parseInt(prompt("Ingrese edad: "))
    
}

function opciones(){
    let opcion = parseInt(prompt("Ingrese una opcion: \n1) Cervezas \n2) Gaseosas \n3) Vinos \n4) Vodka \n5) Salir "))
    if(opcion>=1 && opcion<=4){
        console.log("Usted selecciono la opcion:", opcion)
        menu(opcion)
    }else{
        console.log("Gracias por su visita")
    }
}

function menu(opcion){
    switch(opcion){
        case 1:
            console.log("Aqui tiene la variedad de Cervezas")
            break
        case 2:
            console.log("Aqui tiene la variedad de Gaseosas")
            break
        case 3:
            console.log("Aqui tiene la variedad de Vinos")
            break
        case 4:
            console.log("Aqui tiene la variedad de Vodka")
            break
        default:
            console.error("No hay seleccion")
            break
    }
}