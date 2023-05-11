function reduce(arr, reduceFn, initialValue) {
  // your code here
  let prev = initialValue ?? arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 && initialValue === undefined) continue;

    prev = reduceFn(prev, arr[i], i, arr);
  }
f
  return prev;
}

export { reduce };
