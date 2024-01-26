export function randomId() {
  let randomId = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz";
  for (let i = 1; i <= 8; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    randomId += str.charAt(char);
  }
  return randomId;
}
