const fetch = require('node-fetch');
const allowed = require('../../modules/vocaloidimage.json');

module.exports = {
  name: 'vocaloid',
  category: 'Image',
  description: 'Gets VOCALOID image',
  async execute(_client, msg, args) {
    if (!allowed.includes(args[0])) {
      return msg.channel.send(`Must be one of the following: ${JSON.stringify(allowed)}.`);
    }

    const img = await fetch('https://api.meek.moe/' + args[0])
      .then(res => res.json())
      .then(body => body.url);

    const embed = {
      title: args[0],
      color: 2202550,
      image: {
        url: img
      },
      footer: {
        text: 'Image provided by api.meek.moe'
      }
    }

    msg.channel.send({
      embeds: [embed]
    });
  }
};
