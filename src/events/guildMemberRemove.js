module.exports = async (client, member) => {
    member.guild.channels.cache
      .find((channel) => channel.id === client.config.welcome_channel)
      .send(`${member.user.tag} left **${member.guild.name}** :(`);
};
