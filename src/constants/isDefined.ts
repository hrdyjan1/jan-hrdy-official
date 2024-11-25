function isDefined<T>(x: T | undefined | null): x is T {
  return !(typeof x === 'undefined' || x === null);
}

export { isDefined };
