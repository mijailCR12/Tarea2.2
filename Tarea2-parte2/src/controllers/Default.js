'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

//BOOKS
module.exports.booksBookIdDELETE = function booksBookIdDELETE (req, res, next, bookId) {
  Default.booksBookIdDELETE(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksBookIdGET = function booksBookIdGET (req, res, next, bookId) {
  Default.booksBookIdGET(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.booksGET = function booksGET (req, res, next) {
  Default.booksGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksBookIdPUT = function booksBookIdPUT (req, res, next, body, bookId) {
  Default.booksBookIdPUT(body, bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.booksPOST = function booksPOST (req, res, next, body) {
  Default.booksPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

//PUBLISHERS
module.exports.publishersPublisherIdDELETE = function publishersPublisherIdDELETE (req, res, next, publisherId) {
  Default.publishersPublisherIdDELETE(publisherId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.publishersPublisherIdGET = function publishersPublisherIdGET (req, res, next, publisherId) {
  Default.publishersPublisherIdGET(publisherId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.publishersGET = function publishersGET (req, res, next) {
  Default.publishersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.publishersPublisherIdPUT = function publishersPublisherIdPUT (req, res, next, body, publisherId) {
  Default.publishersPublisherIdPUT(body, publisherId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.publishersPOST = function publishersPOST (req, res, next, body) {
  Default.publishersPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

//AUTHROS
module.exports.authorsAuthorIdDELETE = function authorsAuthorIdDELETE (req, res, next, authorId) {
  Default.authorsAuthorIdDELETE(authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsAuthorIdGET = function authorsAuthorIdGET (req, res, next, authorId) {
  Default.authorsAuthorIdGET(authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsGET = function authorsGET (req, res, next) {
  Default.authorsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsAuthorIdPUT = function authorsAuthorIdPUT (req, res, next, body, authorId) {
  Default.authorsAuthorIdPUT(body, authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.authorsPOST = function authorsPOST (req, res, next, body) {
  Default.authorsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};