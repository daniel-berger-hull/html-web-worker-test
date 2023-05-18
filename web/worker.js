

let workerTimer = null;
let currentCount = 0;


function timerWorkerFunction() {
  postMessage(++currentCount);
} 


  self.addEventListener('message', function(e) {

    if (e.data === 'start') {
      console.log("Web Worker received START:" );
      workerTimer = setInterval(timerWorkerFunction, 500);
    } 
    else if (e.data === 'stop') {
      console.log("Web Worker received STOP!!:" );

      if ( workerTimer !== null)  clearInterval(workerTimer);
      postMessage("idle");
      currentCount = 0;
    }
    else {
      console.log("Web Worker received message: " + e.data );
      postMessage("idle");
    }
    
  });