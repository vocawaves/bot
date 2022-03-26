module.exports = async (client) => {
    client.log.info(`Connected to ${client.user.tag}`);
    client.user.setPresences({ activities: [{ name: 'to ' + client.config.prefix, type: 'LISTENING' }] });
};
