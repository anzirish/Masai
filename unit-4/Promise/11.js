function timer(durationc, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${durationc}ms is finished`);
  }, durationc);
}

function log(message) {
  console.log(message);
}

timer(3000, log);
