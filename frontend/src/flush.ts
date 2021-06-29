export function flush() {
  return new Promise(resolve => process.nextTick(resolve));
}
