function message(string) {
  let prefix = "!";

  const args = string.slice(prefix.length).trim().split(/\s/g);
  const command = args.shift().toLowerCase();

  return "Команда:" + command + " " + "Аргументы:" + args;
}

module.exports = message;
