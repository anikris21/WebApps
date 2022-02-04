let id1 = null;
let id2 = null;
const theOneFunc = (delay) => {
    console.log('Hello after ' + delay + ' seconds');

    // console.log(id1, id2);
    // if (id1 && !id2) {
    //     console.log('Hello after 4 seconds');
    // } else {
    //     console.log('Hello after 8 seconds');
    // }
};

id1= setTimeout(theOneFunc, 4*1000, 4);
id2= setTimeout(theOneFunc, 8*1000, 8);

// console.log('ids ', id1, id2);