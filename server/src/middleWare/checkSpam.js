export default function({ cookies }, res, next) {
    if (cookies.call_request) return res.sendStatus(403);

    next();
}
