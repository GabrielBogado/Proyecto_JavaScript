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

function cervezas(){
 let seleccion = parseInt(prompt("Ingrese una eleccion de Cerveza:\n1) Brahma \n2) Quilmes \n3) Heineken \n4) Schneider \n5) Corona \n6) Salir "))
 switch(seleccion){
    case 1:
        console.log("El stock de Brahma esta siendo revisado")
        break
    case 2:
        console.log("El stock de Quilmes esta siendo revisado")
        break
    case 3:
        console.log("El stock de Heineken esta siendo revisado")
        break
    case 4:
        console.log("El stock de Schneider esta siendo revisado")
        break
    case 5:
        console.log("El stock de Corona esta siendo revisado")
        break
    default:
        console.log("Gracias por venir")
        inicio()
        break
 }
}

function gaseosas(){
 let seleccion = parseInt(prompt("Ingrese una eleccion de Cerveza:\n1) Brahma \n2) Quilmes \n3) Heineken \n4) Schneider \n5) Corona \n6) Salir "))
    
}

function vinos(){
 let seleccion = parseInt(prompt("Ingrese una eleccion de Cerveza:\n1) Brahma \n2) Quilmes \n3) Heineken \n4) Schneider \n5) Corona \n6) Salir "))
    
}

function vodka(){
 let seleccion = parseInt(prompt("Ingrese una eleccion de Cerveza:\n1) Brahma \n2) Quilmes \n3) Heineken \n4) Schneider \n5) Corona \n6) Salir "))
    
}
