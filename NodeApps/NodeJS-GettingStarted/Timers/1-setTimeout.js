const id = setInterval((arg1, arg2, arg3) => {
    console.log('timer called...', id);
    console.log('Args - ', arg1, arg2, arg3);
},
    1000, ["Hi", "hello"], "Hi");