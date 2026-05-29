var path = require('path');
var Book = require('./model');

module.exports = function(app) {

    // ✅ GET all books
    app.get('/book', async function(req, res) {
        try {
            const result = await Book.find({});
            res.json(result);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    });

    // ✅ ADD book
    app.post('/book', async function(req, res) {
        try {
            const book = new Book(req.body);
            const result = await book.save();
            res.json(result);
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    });

    // ✅ DELETE book
    app.delete('/book/:isbn', async function(req, res) {
        try {
            await Book.findOneAndDelete({ isbn: req.params.isbn });
            res.send("Deleted");
        } catch (err) {
            console.error(err);
            res.status(500).send(err);
        }
    });

    // ✅ Serve frontend
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};
