export function debounce<T extends (...args: any[]) => void>(func: T, delay: number) {
  let timerId: NodeJS.Timeout;

  return function (...args: Parameters<T>) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}
