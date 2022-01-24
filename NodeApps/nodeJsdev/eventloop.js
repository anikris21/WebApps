
function baz() {
    console.log("baz ", new Date().getMilliseconds());
}


function bar() {
    console.log("bar ", new Date().getMilliseconds());
}

function foo() {
    console.log("foo ", new Date().getMilliseconds());
    
    setTimeout(baz, 0);
    bar();
    console.log("exit ", new Date().getMilliseconds());
}

foo();