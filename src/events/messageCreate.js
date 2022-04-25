module.exports = async (client, msg) => {
    if (msg.author.bot || !msg.guild) {
        return;
    }

    if (msg.mentions.users.size) {
        const mention = msg.mentions.users.first();
        if (mention && client.afk.has(mention.id)) {
          const data = client.afk.get(mention.id);
          msg.channel.send(`**${mention.tag}** is AFK: ${data.reason}`);
        }
    }

    const prefixMention = new RegExp(`^<@!?${client.user.id}> `);
    const prefix = msg.content.match(prefixMention) ? msg.content.match(prefixMention)[0] : client.config.prefix;
    if (msg.content.indexOf(prefix) !== 0) {
        return;
    }

    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const name = args.shift();
    const command = client.commands.get(name) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(name));
    if (!command) {
        return;
    }

    if (command.ownerOnly && !client.config.owners.includes(msg.author.id)) {
        return;
    }

    try {
        client.log.info('Attempting to run cmd ' + command.name + ' (ran by ' + msg.author.id + ')');
        command.execute(client, msg, args);
    } catch (err) {
        client.log.error(err);
        return msg.channel.send("```" + err + "```");
    }
};
