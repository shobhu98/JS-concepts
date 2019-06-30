function Person(name,age) {
    this.firstName=name.split(" ")[0];
    this.lastname=name.split(" ")[1];
    this.age=age;
     this.isAdult=function() {
        return age>18;

    }


}

p=new Person("John Snow",30);
console.log(p);
console.log(p.isAdult());
// ask  here the doubt
q=Person("Love First",34);
console.log(q);