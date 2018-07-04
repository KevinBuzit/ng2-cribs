/* On ne peut passer que des paramètres de type number à la fonction TS */
/* TS permet de savoir quels sont les paramètres attendus */
function multiply(x: number, y: number){
    return x * y
}

//multiply('Bob',3); --> Erreur
multiply(2,3);

/* On peut assigner un type à une variable */
let person: string;
//person = 3 --> Erreur
person = 'Bob'