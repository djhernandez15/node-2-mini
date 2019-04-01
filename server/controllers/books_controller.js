const books = [];
const id = 0;



module.exports = {
    read: (res, req) => {
        res.status(200).send(books);
    },
    create: (res, req) => {
        const {title, author} = req.body;
        let book = {
            id: id, 
            title: title, 
            author: author
        }
        books.push(book);
        id++;
        res.status(200).send(books)
    },
    update: (books) => {
        
    }
}



