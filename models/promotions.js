const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("mongoose-currency").loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({
    name : {
        type:String,
        required:true,
        unique:true
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: '' //empty string as default
    },
    price: {
        type: Currency, // mongooes currency is used 
        required: true,
        min: 0
    },
     description:{
        type:String,
        required:true
    },
    featured: {
        type: Boolean,
        default:false      
    }
},{
    timestamps:true,
    collection: 'promotions' //for telling mongoose to exculsively name the collection as promotions
    });
    
    var Promotions = mongoose.model("promotion",promotionSchema);
    
    module.exports = Promotions;