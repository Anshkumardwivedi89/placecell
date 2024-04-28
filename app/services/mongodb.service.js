const mongoose = require('mongoose');

exports.connect = () => {
    // connecting to mongo database
    mongoose.connect(process.env.Mongo_Url, { useNewUrlParser: true, useFindAndModify: false ,useUnifiedTopology: true }, function (err) {
        if(err) {
            console.log(err);
        } else {
            console.log('Successfully connected to database.');
            
        }
        
    });
}
