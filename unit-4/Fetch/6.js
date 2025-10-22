function Timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${duration}ms finished`);
  }, duration);
}

function onComplete(message) {
  console.log(message);
}

Timer(5000, onComplete);
