// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// // //1.
// // //register a listener for bellring event
// // emitter.on('bellring', () => {
// //   console.log('We Need to run!');
// // });

// // //raise an event after 10 seconds
// // setTimeout(() => {
// //     emitter.emit('bellring');
// // },10000);

// // emitter.on('bellring', ({period,text}) => {
// //     console.log(`We Need to run because ${period} ${text}`);
// //   });
// //   setTimeout(() => {
// //     emitter.emit('bellring',{
// //         period: 'first',
// //         text: 'period ended',
// //     });
// // },1000);

// // emitter.on('bellring', ({period,text}) => {
// //     console.log(`Addition: ${period + text} & substraction: ${period - text}`);
// //   });
// //   setTimeout(() => {
// //     emitter.emit('bellring',{
// //         period: 50,
// //         text: 10,
// //     });
// // },1000);

// const  School = require('./school');
// const school = new School();
// school.on('bellring',({period, text}) => {
//     console.log(`we need to run because ${period} ${text}`);
// });
// school.startPeriod();



const http = require('http');
const fs = require('fs');

const myReadStream = fs.createReadStream('${')