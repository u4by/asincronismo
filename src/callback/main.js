function sum(num1,num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
return callback(num1,num2);
};

console.log(calc(10,4,sum));


setTimeout(function (){
    console.log('hello world')
}, 4000)

function greeting(name){
    console.log(`hello ${name}`)
}
setTimeout(greeting, 4000, 'user')