const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Form4 = new Schema({
    form4_name: {
        type: String
    },
    form4_phoneno: {
        type: String
    },
    form4_serviceStates1: {
        type: String
    },
    form4_serviceStates2: {
        type: String
    },
    form4_serviceStates3: {
        type: String
    },
    form4_serviceStates4: {
        type: String
    },
    form4_serviceStates5: {
        type: String
    },
    form4_serviceStates6: {
        type: String
    },
    form4_serviceStates7: {
        type: String
    },
    form4_serviceStates8: {
        type: String
    },
    
    form4_serviceStates9: {
        type: String
    },
    form4_serviceStates10: {
        type: String
    },
    form4_serviceStates11: {
        type: String
    },
    form4_serviceStates12: {
        type: String
    },
    form4_serviceStates13: {
        type: String
    },
    form4_serviceStates14: {
        type: String
    },
    form4_serviceStates15: {
        type: String
    },
    form4_serviceStates16: {
        type: String
    },
    form4_serviceStates17: {
        type: String
    },
    form4_serviceStates18: {
        type: String
    },
    
    form4_serviceStates19: {
        type: String
    },
    form4_serviceStates20: {
        type: String
    },
    form4_serviceStates21: {
        type: String
    },
    form4_serviceStates22: {
        type: String
    },
    form4_serviceStates23: {
        type: String
    },
    form4_serviceStates24: {
        type: String
    },
    form4_serviceStates25: {
        type: String
    },
    form4_serviceStates26: {
        type: String
    },
    form4_serviceStates27: {
        type: String
    },
    form4_serviceStates28: {
        type: String
    },
    
    form4_serviceStates29: {
        type: String
    },
    form4_serviceStates30: {
        type: String
    },
    form4_serviceStates31: {
        type: String
    },
    form4_serviceStates32: {
        type: String
    },
    form4_serviceStates33: {
        type: String
    },
    form4_serviceStates34: {
        type: String
    },
    form4_serviceStates35: {
        type: String
    },

    
    form4_transportationCompany: {
        type: String
    },
    form4_city: {
        type: String
    },
    form4_state: {
        type: String
    },
    //form2_completed: {
        //type: Boolean
    //}
});
module.exports = mongoose.model('Form4', Form4);