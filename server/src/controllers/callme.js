import fetch from 'node-fetch';

const { TELEGRAM_TOKEN, TELEGRAM_CHAT_ID } = process.env;

export default async function({ body }, res) {
    try {
        const { name, phone } = body;

        if (!phone) throw Error;

        const message = encodeURI(`<b>Запрос на звонок!</b>\n👨‍💼: ${ name || 'не указано' }\n☎️: ${phone}`);

        try {
            const { status } = await fetch(
                `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&parse_mode=html&text=${message}`
            );

            if (status !== 200) throw Error;
        
            res.cookie('call_request', true, { maxAge: 600000, httpOnly: false }); // 10min for cookie
            res.sendStatus(200);
        } catch(err) {
            res.sendStatus(500);
        }
    } catch(err) {
        res.sendStatus(400);
    }
}
