//Scrivi un programma che stampi in console i numeri da 1 a 100,
//ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const container = document.getElementById("container")

for (let i = 1; i <= 100; i++) {

    const box = document.createElement("div");

    //numeri sia multipli di 3 e di 5

    if (i % 15 == 0) {
        box.classList.add("box", "fizzbuzz");
        box.innerHTML = "fizzbuzz";

    //numeri multipli di 3

    } else if (i % 3 == 0) {
        box.classList.add("box", "fizz");
        box.innerHTML = "fizz";

    //numeri multipli di 5 
        
    } else if (i % 5 == 0) {
        box.classList.add("box", "buzz");
        box.innerHTML = "buzz";
    
    } else {
        box.classList.add("box");
        box.innerHTML = i;
    }
    
    container.append(box);
    
}