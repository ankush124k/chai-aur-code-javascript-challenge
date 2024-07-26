// Activity 1
// Task 1
// const promise1=new Promise((res,req)=>{
//    setTimeout(()=>{
//     res("resolved")
//    },2000)
// })

// promise1.then((res)=>{
//     console.log(res);
// })

// Task 2
const promise2 = new Promise((res, req) => {
  setTimeout(() => {
    req("Error Occured ");
  }, 2000);
});

promise2.catch((val) => {
  console.log(val);
});

// Activity 2
// Task 3
// const p1 = new Promise((res) => {
//   setTimeout(() => {
//     res("fetching data ...promise 1");
//   }, 1000);
// });
// const p2 = new Promise((res) => {
//   setTimeout(() => {
//     res("fetching data ...promise 2");
//   }, 1000);
// });
// const p3 = new Promise((res) => {
//   setTimeout(() => {
//     res("fetching data ...promise 3");
//   }, 1000);
// });

// p1.then((result) => {
//   console.log(result);
//   return p2;
// })
//   .then((result) => {
//     console.log(result);
//     return p3;
//   })
//   .then((result) => {
//     console.log(result);
//   });

// Activity 3
// Task 4
const p4 = new Promise((res) => res("async promise getting resolved..."));

async function func1() {
  const val = await p4;
  console.log(val);
}

// func1();

// Task 5
// const p5 = new Promise((_, req) => {
//   setTimeout(() => {
//     req("async promise for try catch ....");
//   }, 1000);
// });

// async function func2(){
//     try {
//         const val=await p5;
//         console.log(val+"inside try");
//     } catch (error) {
//         console.log(error+"inside catch");
//     }
// }
// func2();

// Activity 4
// Task 6

const api = fetch("https://fakestoreapi.com/products/1");

// api
//   .then((res, req) => {
//     return res.json();
//   })
//   .then((val) => {
//     console.log(val);
//   })
// while calling api always include the .catch

// Task 7
async function handleApi() {
  const data = await api;
  const result = await data.json();
  console.log(result);
  //or we can write in this way too
  // try {
  //   const response = await fetch("https://api.publicapis.org/entries");
  //   const data = await response.json();
  //   console.log(data);
  // } catch (error) {
  //   console.error(error);
  // }
}
// handleApi();

// Activity 5
// Task 8
const p6 = new Promise((res, req) => {
  setTimeout(() => {
    res("promise 1....");
  }, 1000);
});
const p7 = new Promise((res, req) => {
  setTimeout(() => {
    res("promise 2....");
  }, 2000);
});
const p8 = new Promise((res, req) => {
  setTimeout(() => {
    res("promise 3....");
  }, 3000);
});

// Promise.all([p6,p7,p8]).then(val=>console.log(val)).catch(err=>console.log(err));

Promise.race([p6, p7, p8])
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
