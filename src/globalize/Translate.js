class Translate {
    constructor(locale) {
        var content = require('./content');
        this.contentJson = content[locale]
    }

    translate(path) {
        var properties = path.split('.');
        var label = properties.reduce((acc, curr) => acc && acc[curr], this.contentJson)
        if (typeof label == "string" ) {
            return label;
        } else {
            return my_array.slice(-1)[0];
        }
    }
}

export default Translate;
