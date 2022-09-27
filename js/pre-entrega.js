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
        menu()
    }else{
        console.log("Gracias por su visita")
    }
}

function menu(){
    console.log("Aca va el menu en un futuro")
}