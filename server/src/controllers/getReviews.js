import { promises as fs } from 'fs';

import { REVIEWS_FILE } from '../constants/db.js';

export default async function(req, res) {
    try {
        const reviews = await fs.readFile(REVIEWS_FILE, 'utf8');
        res.json(reviews);
    } catch(err) {
        res.sendStatus(500);
    }
}
