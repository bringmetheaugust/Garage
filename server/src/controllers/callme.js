export default function({ body }, res) {
    try {
        const { name, phone } = body;

        if (!phone) throw Error;

        res.sendStatus(200);
    } catch(err) {
        res.sendStatus(400);
    }
}
