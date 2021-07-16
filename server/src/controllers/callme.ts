import fetch from 'node-fetch';
import { Request, Response } from 'express';

type ICallRequest = {
    name: string,
    phone: string
}

const {
    TELEGRAM_TOKEN = '1886946121:AAEehYw6n3xz1eSCljt3gkZzc3lb0Z3epbA',
    TELEGRAM_CHAT_ID = -279746682
} = process.env;

export default async function({ body }: Request<any, any, ICallRequest>, res: Response) {
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
            console.error(err);
            res.sendStatus(500);
        }
    } catch(err) {
        res.sendStatus(400);
    }
}
