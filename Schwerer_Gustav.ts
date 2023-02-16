// soal no 4
let kodeUnix = [23, 89, 67, 29, 192, 6, 2, 129, 21, 872, 891, 901, 70, 61, 78, 62, 32, 90, 90];

kodeUnix = kodeUnix.map((elem: number) => {
  return Math.floor((elem * 46) / 5);
});

console.log(kodeUnix);