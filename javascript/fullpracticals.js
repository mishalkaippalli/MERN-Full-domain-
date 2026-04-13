//setTimeout

// let count = 0;
// function printupto10(){
//     let count = 0;
//    let timer =  setInterval(() => {
//     console.log(count) 
//     count++;
//     if(count > 10){
//         clearInterval(timer);
//     }
//    }, 1000);
// } 
// printupto10()


//generatorfunction
// function *gen(mul){
//     let count = 1;
//     while(count){
//       yield(mul * count);
//       count++;
//     }
// }
// let newGen = gen(5);
// console.log(newGen.next().value);
// console.log(newGen.next().value);
// console.log(newGen.next().value);

 // print from 5 to 0 leaving i sec gap between every prints using generator function
// function* printnum(number){
//     while(number >= 0){
//         yield number;
//         number--;
//     }
// }

// const gen = printnum(5);

// const interval = setInterval(() => {
//     const result = gen.next();

//     if(result.done){
//         clearInterval(interval)
//     }else {
//         console.log(result.value)
//     }
// })


// 1) A tiny delay helper: returns a Promise that resolves after ms milliseconds

// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }

// // 2) A normal (sync) generator: yields start, start-1, ..., 0
// function* countdownGen(start) {
//   let count = start;
//   while (count >= 0) {
//     yield count;   // hand one value to the caller, then pause here
//     count--;
//   }
// }

// 3) An async runner: consumes the generator, pausing 1s between values
// async function runCountdown(gen) {
//   for (let value of gen) {     // pulls each 'yield' value from the generator
//     console.log(value);        // print it
//     await wait(1000);          // pause this async function for ~1 second
//   }
// }

// // 4) Create the generator and run it
// const gen = countdownGen(5);
// runCountdown(gen);             // returns a Promise (you could await/then it)

//promise chaining 
// function step1(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("step 1 done")
//             resolve(10);
//         }, 1000)
//     })
// }

// function step2(data){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("step 2 done")
//             resolve(data * 2)
//         }, 10000)
//     })
// }

// function step3(data) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log("step 3 done");
//             resolve(data + 3)
//         }, 1000);
//     })
// }

// // step1()
// // .then(result1 => step2(result1))
// // .then(result2 => step3(result2))
// // .then(finalResult => {
// //     console.log("Final result", finalResult)
// // })
// // .catch(err => {
// //     console.error("error : ", err)
// // })

// //same using async await
// async function run() {
//     try {
//         const r1 = await step1();
//         const r2 = await step2(r1);
//         console.log("inbetween r2 and r3 in try cathc in run");
//         const r3 = await step3(r2);
//         console.log('final result', r3)
//     } catch (error) {
//         console.error(err)
//     }
// }
// run()

//closure
// function createCounter() {
//     let count = 0;
//     return{
//          increment: () => {
//         count++;
//         return count
//     },
//     decrement: () => {
//         count--;
//         return count
//     }
//     }
  
// }
// const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.count) //undefined cant access directly


//calll apply bind 
//“Borrow this function and run it as if it belongs to this object.”

// function greet(city, country){
//         console.log(`hello I am ${this.name} from ${city} in country ${country}`)
// }

// const person1 = {name: "Mishal"};
// const person2 = {name: "Aneesa"}


// greet.call(person1, "Malappuram", "India");
// greet.apply(person2, ["edapal", "kiran"]);
// const greetAneesa = greet.bind(person2, "malapuram", "India");
// greetAneesa();

//otp generation
// function otpgen(){
//     return Math.floor(1000000 * Math.random())
// }
// console.log(otpgen());


//date printing
// let date = new Date();
// console.log(date.toDateString())

//shallow copy
// const original = {
//     name: "Mishal",
//     address: {
//         city: "Kochi"
//     }
// };

// const copy = original; // ❌ not a copy

// copy.address.city = "Delhi";

// console.log(original.address.city); // ❌ "Delhi"

// //deep copy
// const original1 = {
//     name: "Mishal",
//     address: { city: "Kochi" }
// };

// const copy1 = structuredClone(original);

// copy1.address.city = "Delhi";

// console.log(original1.address.city); // ✅ "Kochi"

// const copy2 = JSON.parse(JSON.stringify(original1))