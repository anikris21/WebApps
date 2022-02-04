// process=require('process')
import process from 'process';

console.log(process.getuid);
if(process.getuid) {
    console.log(`Current uid: ${process.getuid()}`);
}

console.log(process.env.USER);

console.log('\nScript executed with -');
console.log(process.env.VAL1);
console.log(process.env.VAL2);