const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = text => {
  return new Promise(resolve => {
    rl.question(text, answer => resolve(answer));
  });
};

const main = async () => {
  let answer;
  do {
    answer = await question("尻を 叩いて 下さい: ");
    if (answer === "ッパーン") {
      console.log("ほ～い");
    }
  } while (answer !== "exit");
  rl.close();
};

main();
