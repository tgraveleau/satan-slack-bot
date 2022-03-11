const SlackBot = require('slackbots')
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const bot = new SlackBot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'satan',
    disconnect: true
})

const params = {
    icon_emoji: ':robot_face:'
}

bot.on('start', () => {
    console.log('ok')

    bot.postMessageToChannel(
        'bot',
        '@NORMAN :peepofinger: :peepofinger:',
        params
    );
})
bot.postMessageToChannel(
    'bot',
    '@NORMAN :peepofinger:',
    params
);

bot.on('error', (err) => {
    console.error(err);
})