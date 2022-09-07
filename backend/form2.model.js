
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Form2 = new Schema({
    form2_name: {
        type: String
    },
    form2_phoneno: {
        type: String
    },
    form2_organisation: {
        type: String
    },
    form2_city: {
        type: String
    },
    form2_state: {
        type: String
    },
    //form2_completed: {
        //type: Boolean
    //}
});
module.exports = mongoose.model('Form2', Form2);