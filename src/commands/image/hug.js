const fetch = require('node-fetch');

module.exports = {
    name: 'hug',
    category: 'Image',
    description: 'Hug someone',
    async execute(_client, msg, _args) {
        if (!msg.mentions.users.first() || msg.mentions.users.first().id === msg.author.id) {
            return msg.channel.send('Mention another user!');
        }

        const img = await (await fetch('https://purrbot.site/api/img/sfw/hug/gif')).json();
        const embed = {
            title: `${msg.author.username} just hugged ${msg.mentions.users.first().username}`,
            color: 2202550,
            image: {
                url: img.link
            },
            footer: {
                text: 'Image provided by purrbot.site'
            }
        }

        msg.channel.send({
            embeds: [embed]
        });
    }
};
