const chai = require("chai");

function receivesAFunction(callback) {
    
 callback();
}
const spy = chai.spy();
receivesAFunction(spy);

function returnsANamedFunction() {
    // Return a named function
    return function fn() {
        // This function has a name and can be invoked later
       // console.log("This is a named function!");
    };
}
// Example usage:
var fn;
 fn = returnsANamedFunction();
// Now you can call the named function returned
fn();




function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        
    };
}
var fn;
fn = returnsAnAnonymousFunction();

fn();