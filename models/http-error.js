class HttpError extends Error {
    constructor(message, errorCode) { //Allows us to add logic that runs whenever we instantiate this class
        super(message); //Add a message property 
        this.code = errorCode; //Adds a "code" property
    }
}

module.exports = HttpError;