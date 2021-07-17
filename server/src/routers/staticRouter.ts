import { resolve } from 'path';
import express, { Router } from 'express';

const router = Router();
const STATIC_CLIENT_FOLDER = '../client/dist';

router.get('/*', express.static(STATIC_CLIENT_FOLDER));
router.get('/', (_, res) => res.redirect('/ru'));

// static 404
router.use(({ path }, res) => {
    const [ _, lang ] = path.split('/');
    
    res.status(404).sendFile(
        resolve(
            `${resolve()}/${STATIC_CLIENT_FOLDER}/${lang}/404.html`
        )
    );
});

export default router;
