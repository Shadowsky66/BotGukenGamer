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

        // const args = msg.content.slice(prefix.length).trim().split(/\s/g);
        // const command = args.shift().toLowerCase();
    }
}


module.exports = Parser;