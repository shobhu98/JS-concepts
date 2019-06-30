function task(done) {
    console.log("doing some task");
    done();

}

task(function () {
    console.log("task was done");

});
console.log("I did a task");