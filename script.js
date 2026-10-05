let nombres = [];
let valores = [];
let valorFinal= 0;
//let montoEgreso=-1
//let montoIngreso=0; 
function registrarMovimiento(){     
 
    const nombre = prompt("Ingresa el nombre del movimiento (Ejem. Salario):");
    const tipo = prompt("Tipo de movimiento (escribe: ingreso o gasto):");
    
    const monto = parseFloat(prompt("Monto numérico(Ejem. 1500):"));
 
    if (!nombre || (tipo !== "ingreso" && tipo !== "gasto") || isNaN(monto) || monto <= 0) {
        alert("Datos inválidos. Por favor resísalos.");
        return;
    }
        if(nombres.includes(nombre)){
            alert("Ese nombre movimiento ya existe.");
            return;
        }
    valorFinal = (tipo === "ingreso") ? monto : -monto;
        
        nombres.push(nombre);
        valores.push(valorFinal);
        console.log("Nombre del Movimiento: "+ nombre);
        console.log("Tipo de movimiento: "+ tipo);
        console.log("Monto: "+ monto);
        console.log("----------------------------------")
        
    
    }
    
 
function calcularMaximo(){
    let numMax=0;
    for(let i=0; i<valores.length;i++){
        if (valores[i] > numMax ) {
        numMax=valores[i];
        }
    }
    return numMax;
}
function calcularMinimo(){
    let numMin=-1;
    for(let i=0; i<valores.length;i++){
        if (valores[i] < numMin ) {
        numMin=valores[i];
        }
    }
    return numMin;
}

 
function calcularSaldo(){
    let saldo = 0;
    for (let i = 0; i < valores.length; i++){
        saldo += valores[i];
    }
    return saldo;
}
 
function mostrarResumen (){
    console.log("Resumen Final de Movimientos:");
    console.log("Total de movimientos", nombres.length);
    console.log("Saldo total S/.: " + calcularSaldo().toFixed(2));
    console.log("------INGRESO MAS ALTO------");
    console.log("Monto: "+ calcularMaximo());
     console.log("------EGRESO MAS BAJO O NEGATIVO------");
    console.log("Monto: "+ calcularMinimo());
}
 
let continuar = "si";
 
while( continuar === "si"){

    registrarMovimiento();
    continuar = prompt("Deseas registrar otro movimiento? (si/no)").toLowerCase();
}
 
mostrarResumen();