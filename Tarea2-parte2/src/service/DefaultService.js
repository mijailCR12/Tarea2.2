'use strict';

const fs = require('fs');

let books = [];
let authors = [];
let publishers = [];

const loadBooks = () => {
  fs.readFile(__dirname + '/' + 'books.json', 'utf8', (err, data) => {
    books = JSON.parse(data)
  });
}
loadBooks();

const loadAuthors = () => {
  fs.readFile(__dirname + '/' + 'authors.json', 'utf8', (err, data) => {
    authors = JSON.parse(data)
  });
}
loadAuthors();

const loadPublishers = () => {
  fs.readFile(__dirname + '/' + 'publishers.json', 'utf8', (err, data) => {
    publishers = JSON.parse(data)
  });
}
loadPublishers();

const saveBooks = () => {
  let data = JSON.stringify(books)
  fs.writeFileSync(__dirname + '/' + 'books.json', data)
};

const saveAuthors = () => {
  let data = JSON.stringify(authors)
  fs.writeFileSync(__dirname + '/' + 'authors.json', data)
};

const savePublishers = () => {
  let data = JSON.stringify(publishers)
  fs.writeFileSync(__dirname + '/' + 'publishers.json', data)
};
/**
 * Delete a book by ID.
 *
 * bookId String 
 * no response value expected for this operation
 **/
exports.booksBookIdDELETE = function(bookId) {
  return new Promise(function(resolve, reject) {
    let index = books.findIndex(i => i.id == bookId);
    if (index == -1)
      return resolve();
    else {
      books = books.filter(i => i.id != bookId);
      saveBooks();
    }
  });
}

exports.authorsAuthorIdDELETE = function(authorId) {
  return new Promise(function(resolve, reject) {
    let index = authors.findIndex(i => i.id == authorId);
    if (index == -1)
      return resolve();
    else {
      authors = authors.filter(i => i.id != authorId);
      saveAuthors();
    }
  });
}

exports.publishersPublisherIdDELETE = function(publisherId) {
  return new Promise(function(resolve, reject) {
    let index = publishers.findIndex(i => i.id == publisherId);
    if (index == -1)
      return resolve();
    else {
      publishers = publishers.filter(i => i.id != publisherId);
      savePublishers();
    }
  });
}
/**
 * Returns a book by ID.
 *
 * bookId String 
 * returns Book
 **/
exports.booksGET = function() {
  return new Promise(function(resolve, reject) {
     resolve(books);
  });
}

exports.authorsGET = function() {
  return new Promise(function(resolve, reject) {
     resolve(authors);
  });
}

exports.publishersGET = function() {
  return new Promise(function(resolve, reject) {
     resolve(publishers);
  });
}

exports.booksBookIdGET = function(bookId) {
  return new Promise(function(resolve, reject) {
    let book = books.find(i => i.id == bookId);
    if (book == undefined)
      return resolve();
    else
     resolve(book);
  });
}

exports.authorsAuthorIdGET = function(authorId) {
  return new Promise(function(resolve, reject) {
    let author = authors.find(i => i.id == authorId);
    if (author == undefined)
      return resolve();
    else
     resolve(author);
  });
}

exports.publishersPublisherIdGET = function(publisherId) {
  return new Promise(function(resolve, reject) {
    let publisher = publishers.find(i => i.id == publisherId);
    if (publisher == undefined)
      return resolve();
    else
     resolve(publisher);
  });
}


/**
 * Update book information
 *
 * body Book Book data
 * bookId String 
 * no response value expected for this operation
 **/
exports.booksBookIdPUT = function(body,bookId) {
  return new Promise(function(resolve, reject) {
    let index = books.findIndex(i => i.id == bookId);
    if (index == -1)
      return resolve();
    else {
      books[index] = body;
      saveBooks();
      res.send('book was upload')
    }
  });
}

exports.authorsAuthorIdPUT = function(body,authorId) {
  return new Promise(function(resolve, reject) {
    let index = authors.findIndex(i => i.id == authorId);
    if (index == -1)
      return resolve();
    else {
      authors[index] = body;
      saveAuthors();
    }
  });
}

exports.publishersPublisherIdPUT = function(body,publisherId) {
  return new Promise(function(resolve, reject) {
    let index = publishers.findIndex(i => i.id == publisherId);
    if (index == -1)
      return resolve();
    else {
      publishers[index] = body;
      savePublishers();
    }
  });
}



/**
 * Create a new book
 *
 * body Book Book data
 * no response value expected for this operation
 **/
exports.booksPOST = function(body) {
  return new Promise(function(resolve, reject) {
    let index = books.findIndex(i => i.id == body.id);
    if (index != -1)
      return resolve();
    else {
      books.push(body);
      saveBooks();
    }
  });
}

exports.authorsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    let index = authors.findIndex(i => i.id == body.id);
    if (index != -1)
      return resolve();
    else {
      authors.push(body);
      saveAuthors();
    }
  });
}

exports.publishersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    let index = publishers.findIndex(i => i.id == body.id);
    if (index != -1)
      return resolve();
    else {
      publishers.push(body);
      savePublishers();
    }
  });
}