// OBJETOS 


//let objeto
const auto1 = {
    //clave: 'valor'
     marca: 'FIAT',
     modelo: 'UNO',
     peso: 1100,
     color: 'Rojo'
 }
 
 const auto2 = {
     marca: 'PEUGEOT',
     modelo: '206',
     peso: 1230,
     color: 'Negro'
 }
 
 //ADVERTENCIA: Por mas que los objetos esten instanciados con const suvalor se puede cambiar de la siguiente manera
 
 auto1.marca = 'Volkswagen'
 auto1.modelo = 'Gol Power'
 console.log('El auto 1 es un:', auto1)
 
 /* console.log('Auto 1: ', auto1)
 console.log('Auto 2: ', auto2) */
 
 
 console.log('El color del auto 1 es: ', auto1.color)
 console.log('El peso del auto 2 es: ', auto2.peso,'KG')
 
 //Se pueden acceder a las caracteristicas de la siguiente forma tambien:
 console.log('la marca del auto 1 es', auto1["marca"]);
 
 
 const vendedor = {
     nombre: 'Pedro',
     apellido: 'Gonzalez',
     empresa: 'Auto S.A',
     habilidadesBlandas: ['Carisma', 'Puntualidad'],
     vender: function(){
         return "Pedro ha vendido un auto"
     },
     nombreCompleto: function(){
         //This se utilizar para llamar un objeto fuera del scope en el que estamos trabajando.
         return this.nombre + " " + this.apellido
     }
 }
 
 console.log(vendedor.vender());
 console.log(vendedor.nombreCompleto());
 console.log(vendedor.habilidadesBlandas);
 console.log(vendedor.habilidadesBlandas[0,1]);