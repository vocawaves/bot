module.exports = {
    name: 'afk',
    category: 'Utility',
    description: 'Set your status to AFK and a message will be sent when a user mentions you',
    async execute(client, msg, args) {
        if (args[0] === 'set') {
            return client.afk.set(msg.author.id, {
                id: msg.author.id,
                reason: args.slice(1).join(' ') ? args.slice(1).join(' ') : 'Currently, I am AFK. I will respond as soon as possible!'
            });
        }

        if (!client.afk.get(msg.author.id)) {
            client.afk.set(msg.author.id, {
                id: msg.author.id,
                reason: args.join(' ') ? args.join(' ') : 'Currently, I am AFK. I will respond as soon as possible!'
            });
            return msg.channel.send('You are now AFK.');
        } else {
            client.afk.delete(msg.author.id);
            msg.channel.send('You are no longer AFK.');
        }
    }
};
