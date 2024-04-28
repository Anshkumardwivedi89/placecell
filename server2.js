const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
mongoose.connect(process.env.Mongo_Url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});



const userSchema = new mongoose.Schema({
    college_id : {
        type : String,
        required : true,
        unique : true
    },
    student_name : {
        type : String,
        required : true
    },
    passout_batch : {
        type : String
    },
    gender : {
        type : String,
        default : 'M'
    },
    status : {
        type : String,
    },
    contact_no : {
        type : String,
    },
    college_email : {
        type : String,
    },
    alternate_email : {
        type : String,
    },
    degree : {
        type : String,
    },
    department : {
        type : String,
    },
    cgpa : {
        type : String,
    },
    matric_marks : {
        type : String
    },
    matric_board : {
        type : String
    },
    senior_marks : {
        type : String
    },
    senior_board : {
        type : String
    },
    alternate_contact_no : {
        type : String
    },
    address : {
        type : String
    },
    city : {
        type : String
    },
    post_code : {
        type : String
    },
    state : {
        type : String
    },
    country : {
        type : String
    },
    linkedln_link : {
        type : String
    },
    login_otp : {
        type : String
    },
    resume_url : {
        type : String
    },
    password : {
        type : String
        //select : false
    },
    active : {
        type : Boolean,
        default : true
    },
    temporarytoken : {
        type : String,
    },
    permission : {
        type : String,
        required : true,
        default: 'student'
    }
});
// Hash the password before saving it to the database
userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();

    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err);

        user.password = hash;
        next();
    });
});
const User = mongoose.model('User', userSchema);

const newUser = new User({
    college_id: '0808cs211028',
    student_name: 'Test Student',
    passout_batch: '2024',
    gender: 'M',
    status: 'active',
    contact_no: '8080808080',
    college_email: 'anshdwivedi2002a@gmail.com',
    degree: 'B.Tech',
    department: 'Computer Science',
    cgpa: '9.5',
    matric_marks: '80',
    matric_board: 'CBSE',
    senior_marks: '90',
    senior_board: 'CBSE',
    alternate_contact_no: '8989409815',
    address: 'Dutta Nagar',
    city: 'Indore',
    post_code: '452012',
    state: 'MP',
    country: 'INDIA',
    linkedln_link: 'test.linkedin',
    login_otp: '123456',
    resume_url: 'https://www.example.com/resume1.pdf',
    password: 'password123',
    active: true,
    temporarytoken: 'temp12345',
    permission: 'student'
});

newUser.save((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('User saved successfully');
    }
});


// Other routes and middleware can go here...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});