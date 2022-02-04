let id;
let cnt =0;

function timer(arg) {
    if(cnt>=5) {
        console.log('done');
        clearInterval(id);
        return;
    } else {
        console.log(arg);
    }
    cnt++;
}

id = setInterval(timer, 1*1000, 'Hello world');
console.log('timer...');