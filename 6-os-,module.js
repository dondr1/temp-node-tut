const { log } = require('console');
const os=require('os');

//info about current user
const user=os.userInfo()
console.log(user);

//method returns the syastime uptime in secs
console.log(`The System Updtime is ${os.uptime()} secs`);

const currentOS ={
  name:os.type(),
  release:os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS)