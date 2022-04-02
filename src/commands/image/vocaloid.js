const fetch = require('node-fetch');
const allowed = require('../../modules/vocaloidimage.json');

module.exports = {
  name: 'vocaloid',
  category: 'Image',
  description: 'Gets VOCALOID image',
  async execute(_client, msg, args) {
    if (!allowed.includes(args[0])) {
      const list = allowed.map(x => `\`${x}\``).join(', ');
      return msg.channel.send(`Must be one of the following: ${list}.`);
    }

    const img = await (await fetch('https://api.meek.moe/' + args[0])).json();
    const embed = {
      title: args[0].charAt(0).toUpperCase() + args[0].slice(1),
      color: 2202550,
      image: {
        url: img.url
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
