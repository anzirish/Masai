function memoize(fn) {
    const cache = new Map();
  
    return function (a, b) {
      const key = a + '-' + b;
      if (cache.has(key)) {
        return cache.get(key);
      }
  
      const result = fn(a, b);
      cache.set(key, result);
      return result;
    };
  }

  function add(x, y) {
    return x + y;
  }
  
  const memoizedAdd = memoize(add);
  
  console.log(memoizedAdd(1, 2)); // Calculating... 3
  console.log(memoizedAdd(1, 2)); // From cache: 3
  console.log(memoizedAdd(2, 1)); // Calculating... 3 (different key)
  