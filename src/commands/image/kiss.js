const fetch = require('node-fetch');

module.exports = {
    name: 'kiss',
    category: 'Image',
    description: 'Kiss someone',
    async execute(_client, msg, _args) {
        if (!msg.mentions.users.first() || msg.mentions.users.first().id === msg.author.id) {
            return msg.channel.send('Mention another user!');
        }

        const img = await fetch('https://purrbot.site/api/img/sfw/kiss/gif', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(body => body.link);

        const embed = {
            title: `${msg.author.username} just kissed ${msg.mentions.users.first().username}`,
            color: 2202550,
            image: {
                url: img
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
