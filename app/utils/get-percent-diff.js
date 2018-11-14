export default function getPercentDiff(start, end, digits = 10) {
  const _start = +start;
  const _end = +end;

  let diff;
  if (_end < _start) {
    diff = ((_start - _end) / _start) * -1;
  } else {
    diff = (_end - _start) / _start;
  }
  return +diff.toFixed(digits);
}
