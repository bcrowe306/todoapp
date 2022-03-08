var express = require('express');
var router = express.Router();
const todo_service = require('../../services/todo_service')
/* GET home page. */
router.get('/', async (req, res) => {
    try {
        results = await todo_service(req.app.locals.db).select(req.user._id)
        res.json(results)
    } catch (error) {
        console.log(error)
        res.status(500).json(err)
    }
});
router.get('/:_id', async (req, res) => {
    try {
        results = await todo_service(req.app.locals.db).selectOne(req.params._id, req.user._id)
        res.json(results)
    } catch (error) {
        console.log(error)
        res.status(500).json(err)
    }
});
router.post('/', async (req, res) => {
    try {
        results = await todo_service(req.app.locals.db).insert(req.body, req.user._id)
        res.json(results)
    } catch (error) {
        console.log(error)
        res.status(500).json(err)
    }
});
router.post('/:_id/complete', async (req, res) => {
    try {
        results = await todo_service(req.app.locals.db).update(req.params._id, {completed: true} , req.user._id)
        res.json(results)
    } catch (error) {
        console.log(error)
        res.status(500).json(err)
    }
});
router.put('/:_id', async (req, res) => {
    try {
        results = await todo_service(req.app.locals.db).update(req.params._id, req.body, req.user._id)
        res.json(results)
    } catch (error) {
        console.log(error)
        res.status(500).json(err)
    }
});
router.delete('/:_id', async (req, res) => {
    try {
        results = await todo_service(req.app.locals.db).deleteOne(req.params._id, req.user._id)
        res.json(results)
    } catch (error) {
        console.log(error)
        res.status(500).json(err)
    }
});

module.exports = router;
