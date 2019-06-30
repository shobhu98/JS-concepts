function Person(name,age) {
    this.firstName=name.split(" ")[0];
    this.lastname=name.split(" ")[1];
    this.age=age;


}

p=new Person("John Snow",30);
console.log(p);