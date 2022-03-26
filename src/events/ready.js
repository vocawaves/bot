module.exports = async (client) => {
    client.log.info(`Connected to ${client.user.tag}`);
    client.user.setPresence({ activities: [{ name: `.help [${client.guilds.cache.size}] https://github.com/vocauk`, type: 'PLAYING' }] });
};
