// SCOPE

const x = 5
{
    const x = 2 
    console.log(x)
}

console.log(x);

//


{
    const y = 2 
    console.log(y)
}

console.log(y);

//el segundo consolelog arroja error porque y fuera de las llaves no esta definido.

const z = 5 
{
    
    console.log(z)

}

console.log(z);

/* en este caso el consolelog que se encuentra dentro de las llaves al no estar definido dentro 
de las llaves, tomara el valor de su elemento padre (valor de la variable fuera de las llaves.) */


let x1 = 5;

{
    let y1 = 3
    x1 += y1  //Es lo mismo que definir x = x+y
}