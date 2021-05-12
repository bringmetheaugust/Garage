import fetch from 'node-fetch';

const { TELEGRAM_TOKEN, TELEGRAM_CHAT_ID } = process.env;

export default async function({ body }, res) {
    try {
        const { name, phone } = body;

        if (!phone) throw Error;

        const message = encodeURI(`<b>Запрос на звонок!</b>\n👨‍💼: ${ name || 'не указано' }\n☎️: ${phone}`);

        try {
            const res = await fetch(
                `https://api.telegram.org/bot${ TELEGRAM_TOKEN || '1886946121:AAEehYw6n3xz1eSCljt3gkZzc3lb0Z3epbA'}/sendMessage?chat_id=${ TELEGRAM_CHAT_ID || -279746682 }&parse_mode=html&text=${message}`
            );

            if (!res.ok) throw Error;

            res.sendStatus(200);
        } catch(err) {
            res.sendStatus(500);
        }
    } catch(err) {
        res.sendStatus(400);
    }
}
