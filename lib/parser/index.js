class Parser {
  constructor(prefix) {
    this.defaultPrefix = prefix;
  }

  getPrefixForGuild(guildId) {
    return this.defaultPrefix;
  }

  looksLikeCommand(messageContent, guildId) {
    return messageContent.startsWith(this.getPrefixForGuild(guildId));
  }

  parseCommand(messageContent, guildId) {
    return messageContent
      .slice(this.getPrefixForGuild(guildId).length)
      .trim()
      .split(/\s+/);
  }
}


module.exports = Parser;