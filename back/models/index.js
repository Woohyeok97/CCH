const mongoose = require('mongoose')

// MongoDB 랑 Mongoose 랑 연결시키는 connect 라는 함수를 만듬
// mongoose.connect 를 이용해서 연결
const connect = ()=>{
    mongoose.connect("mongodb://qordngur156:662qor663@cluster0-shard-00-00.yu0ka.mongodb.net:27017,cluster0-shard-00-01.yu0ka.mongodb.net:27017,cluster0-shard-00-02.yu0ka.mongodb.net:27017/todoapp?ssl=true&replicaSet=atlas-dgt8k1-shard-0&authSource=admin&retryWrites=true&w=majority", {
    dbName : 'CCH',
    useNewUrlParser: true,
    }, (에러)=> {
        if(에러) console.log('MongoDB 에러발생', 에러);
        else {
            console.log('MongoDB 연결성공!'); 
        }
    })
}

//connect 란 이름으로 export 해줌
module.exports = connect;
