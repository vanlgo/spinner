let timer = 100;
let animate = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
for (let i = 0; i !== 5; i++) {
  timer += 200;
  setTimeout(() => {
    process.stdout.write(animate[i]);
  }, timer);
}