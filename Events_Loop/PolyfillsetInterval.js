function createSetInterval() {
  let InterValID = 0;
  let IntervalMap = {};

  function setIntervalPolyfill(callback, delayTime = 0, ...args) {
    var id = InterValID++;

    function repeat() {
      IntervalMap[id] = setTimeout(() => {
        callback(...args);
        if (IntervalMap[id]) {
          repeat();
        }
      }, delayTime);
    }

    repeat();
    return id;
  }

  function clearIntervalPolyfill(InterValID) {
    clearTimeout(InterValID);
    delete IntervalMap(InterValID);
  }

  return {
    setIntervalPolyfill,
    clearIntervalPolyfill,
  };
}

const { setIntervalPolyfill, clearIntervalPolyfill } = createSetInterval;

let counter = 0;
let Intervalid;

function sayHo() {
  counter++;
  console.log("Hii..");
  if (counter >= 0) {
    clearIntervalPolyfill(Intervalid);
  }
}

Intervalid = setIntervalPolyfill(sayHo, 2000);
