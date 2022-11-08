const mongoose = require('mongoose')
const { Schema } = mongoose


// ObjectId 타입은 Schema로 따로 정의해주어야함!
const { Types : { ObjectId } } = Schema;
const postSchema = new Schema({
    userId : {
        type : ObjectId,
        required : true, //required 는 null 유무
        ref : 'User', // ref에는 추후에 관계를 맺을 콜렉션명을 적음
    },
    date : {
        type : Date,
        required : true,
    },
    content : {
        type : String,
        required : true,
    },
    image : {
        type : String,
        required : false,
    }
})

module.exports = mongoose.model('Post', postSchema)