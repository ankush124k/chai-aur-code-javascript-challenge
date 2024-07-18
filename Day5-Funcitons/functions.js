// Activity 1

// Task 1
function evenOdd(num){
    if(num%2==0){
        console.log("Even");
    }else{
        console.log("Odd");
    }
}

evenOdd(5);

// Task 2
function sq(num){
    console.log(num +" square is "+num*num);
}

sq(5);

// Activity 2

// Task 3
function maxTwo(a,b){
    if(a>b){
        console.log("maximum is "+a);
    }else{
        console.log("maximum is " + b);
    }
}

// Task 4
function strConcate(str1,str2){
    return str1+str2;
}

const s=strConcate("Ankush"," Kushwaha");
console.log(s);

// Activity 3

// Task 5
const  arrow = (num1,num2) => {
    return num1+num2;
}

const Ans = arrow(5,8);
console.log("sum "+Ans);

// Task 6 
const strCheck=(str,ch)=>{
    for (let i=0;i<str.length;i++) {
        if (str[i]===ch) {
           return true;  
        }
    }
    return false;

    // str.includes(char); this can also be used
}

console.log(strCheck("ankush",'k'));

// Activity 4

// Task 7
function product(num1,num2=10){
    return num1*num2;
}

console.log(product(5));
console.log(product(5,20));

// Task 8
const greetings=(name,age=18)=>console.log(`Hello welcome ${name} \n ${age}`);

// Activity 5

// Task 9
function higher1(fn,val){
    
    for(let i=0;i<val;i++){
        fn()
    }
   
}

higher1(()=>console.log("inner function called"),3);

// Task 10

function higher2(func1,func2,val){

    const result=func1(val);
    func2(result);

}

function func1(num){
    console.log("function 1...");
    return num*5;
}

function func2(res){
    console.log("function 2...   val="+res);
}

higher2(func1,func2,5);




