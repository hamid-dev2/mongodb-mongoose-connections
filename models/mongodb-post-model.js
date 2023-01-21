const Utils = require('../utils/mongodb-methods-util');

module.exports = class Post extends Utils{
    constructor(title, content) {
        super()
        this.title = title
        this.content = content
    }
}