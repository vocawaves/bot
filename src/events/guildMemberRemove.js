module.exports = async (client, member) => {
    const embed = {
        title: 'Member Left',
        description: `${member.user.tag} left **${member.guild.name}** :(`,
        color: '#00ddd4',
        image: {
            url: 'https://c.tenor.com/9T38EKSwugcAAAAC/anime-hatsune-miku.gif'
        }
    };

    member.guild.channels.cache
      .find((channel) => channel.id === client.config.welcome_channel)
      .send({ embeds: [embed] });
};
