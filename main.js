// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
//
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + " ,";
// }
// console.log(text)

//

// let i = 2;
// let len = cars.length;
// let Concatant = "";
// for (; i < len; i++) {
//     Concatant += cars[i] + "<br>";
// }

//Lub1 
for (let i = 0; i <= 25; i++) {
    console.log(i);
}
console.log("-----------------------------------------")
let n = ""
for (let t = 0; t <= 10; t++) {
    n = t * t
    console.log("the Squer of number is :" + n)
}

console.log("-----------------------------------------")


for (let t = 0; t <= 20; t++) {
    if (t % 2 == 1) {
        console.log(t)
    }

}



let muti = 0;
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 10; j++) {
        muti = i * j;
        console.log(muti)

    }

}

console.log("--------------------")
let a = 0;
let b = 0;

for (let f = 0; f <= 10; f++) {
    let f = a + b;
    a = b;
    b = c;
}