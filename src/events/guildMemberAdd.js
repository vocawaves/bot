module.exports = async (client, member) => {
    const embed = {
        title: 'New Member Joined',
        description: `Welcome ${member.user.tag} to **${member.guild.name}**!`,
        color: '#00ddd4',
        image: {
            url: 'https://c.tenor.com/YRUmceyTW4cAAAAC/miku-bestie.gif'
        }
    };

    member.guild.channels.cache
      .find((channel) => channel.id === client.config.welcome_channel)
      .send({ embeds: [embed] });
};
