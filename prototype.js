//prototype is inheritance in JS

let p={
    a:20
};

let  q=Object.create(p);
q.b=20;

let r=Object.create(q);

r.c=30;

console.log(p);
console.log(q);
console.log(r);
console.log(r.__proto__===q);