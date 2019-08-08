import { Router } from 'express';
import { knexDB } from '../../db/queries';
import { isAdmin } from '../../middleware/routerMiddleware';


let router = Router();

router.get('/:id?', async (req, res) => {
    let id = req.params.id;
    try {
        if (id) {
            let [blog] = await knexDB('blogs').select().where('id', id);
            res.json(blog);
        } else {
            let blogs = await knexDB('blogs').select().orderBy('_created', 'desc');
        res.json(blogs);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    try {
        let data = await knexDB('blogs').insert(req.body);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}); 


router.put('/:id', async (req, res) => {
    try {
        let id = req.body.id
        let details = req.body.details
        let editedSesh = await knexDB('blogs').where('id', '=', id).update('details', details);
        res.json(editedSesh);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

router.delete('/:id', isAdmin, async (req, res) => {
    try {
        let id = req.body.id
        let delSesh = await knexDB('blogs').where('id', '=', id).del();
        res.json(delSesh);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})
export default router;

