const mongoose = require('mongoose')
const { Schema } = mongoose


// SChema라는 constructor로 MongoDB에 들어갈 collection을 만듬   
const UserSchema = new Schema({
    name : {
        type : String,
        required : true,
    },
    nickName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
})

//mongoose의 model메소드는 스키마를 이용해 만든 인스턴스(자식)를 데이터베이스내에서 처리할수 있게해줌
module.exports = mongoose.model('User', UserSchema)