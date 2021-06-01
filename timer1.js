let args = process.argv.slice(2).map(x => x * 1000);

if (args === []) {
  process.exit();
}

for (let item of args) {
  
  if (isNaN(item) || item < 0) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('. ');
  }, item);
}