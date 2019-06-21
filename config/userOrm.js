const connection = require("./connection");

//Final end to the chain of callback functions

var ormObject = {
    someTestFunction: () => {
        console.log("hello world");
    }
};

module.exports = ormObject;

