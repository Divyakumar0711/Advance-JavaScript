function outer() {
  let username = "divy";
  console.log("outer", secret); //it show error  // not pass value child to parent function
  function inner() {
    let secret = "my123";
    console.log("inner", username); //this is execute  //pass alue from parent to child
  }
  function inner2() {
    console.log("inner2", secret); //this is error  not share one function value to another function
  }
  inner();
  inner2();
}
outer();


//that's why we need clouser
