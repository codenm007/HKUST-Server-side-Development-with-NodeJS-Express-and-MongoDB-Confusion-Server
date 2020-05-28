const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaderSchema = new Schema({
    name : {
        type:String,
        required:true,
        unique:true
    },
    image: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    abbr: {
        type: String,
        required: true
    },
     description:{
        type:String,
        required:true
    },
    featured: {
        type: Boolean,
        default:false      
    }
}, {
    timestamps:true,
    collection: 'leaders' // for telling mongoose to exculsively name the collection as leaders
    
    });
    
    var Leaders = mongoose.model("leader",leaderSchema);
    
    module.exports = Leaders;