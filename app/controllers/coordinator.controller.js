let User = require('../models/user.model');
const SMS = require('../services/sms.service');
const Constant = require('../config/constant')
const bcrypt = require('bcrypt');

exports.add = async (req, res) => {
    const _b = req.body;
    console.log(_b)

    if(_b.college_email.toLowerCase().split("@")[1] !== Constant.emailSuffix) {
        res.status(200).json({ success : false, message : 'Invalid IPS College Email ID.'})
    } else {

        try {
            let hashedPassword;
            bcrypt.hash(_b.alternate_contact_no, 10, (err, hash) => {
                if (err) return next(err);
        
                _b.alternate_contact_no = hash;
                console.log(hash)
            });

        
 
  const coordinator = await User.create({
    student_name: _b.name.toUpperCase(),
    college_email: _b.college_email.toLowerCase(),
    college_id: _b.college_email.toUpperCase().split("@")[0] ,
    permission: _b.permission.toLowerCase(),
    passout_batch: _b.passout_batch,
    alternate_contact_no: _b.alternate_contact_no,
    password: hashedPassword, // <--- Pass the hashed password here
    contact_no: _b.alternate_contact_no
   
            });

            res.status(200).json({ success : true, message : 'Coordinator successfully added.'})

            const notif = await SMS.sendDM(_b, 'addCoordinator');
        }
        catch(err) {
            console.error(err);
            res.status(200).json({ success : false, message : 'Something went wrong!'});
        }
    }
}

exports.getAll = (req, res) => {

    User
        .find({ permission : { $in :  Constant.placementTeamRoles } })
        .select('student_name college_id college_email alternate_contact_no permission')
        .lean()
        .then(coordinators => {
            res.status(200).json({ success : true, coordinators : coordinators })
        })
        .catch(err => {
            console.error(err);
            res.status(200).json({ success : false, message : 'Something went wrong!'});
        })
}
