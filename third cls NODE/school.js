const EventEmitter = require('events');
 class School extends EventEmitter{
  startPeriod(){
    console.log('class started');

    setTimeout(() => {
              this.emit('bellring',{
                period: 'first',
                text: 'period ended',
            });
        },1000);
}
 }
module.exports = School;