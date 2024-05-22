const User = require('../models/user'); 

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll();

        if(!users.length) {
            return res.status(404).json({message: 'Users not found'})
        }

        res.status(200).json({ users: users });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching users' });
    }
    // User.findAll()
    //     .then(users => {
    //         res.status(200).json({ users: users });
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         res.status(500).json({ message: 'Error fetching users' });
    //     });
}

exports.getUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        return res.status(200).json({user: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching user' });
    }
    // const userId = req.params.userId;
    // User.findByPk(userId)
    //     .then(user => {
    //         if (!user) {
    //             return res.status(404).json({ message: 'User not found' });
    //         }
    //         res.status(200).json({ user: user });
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         res.status(500).json({ message: 'Error fetching user' });
    //     });
}

exports.createUser = async (req, res, next) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const user = await User.create({name: name, email: email});
        return res.status(201).json({
                    message: 'User created successfully. Congratulation',
                    user: user
                }); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user' });
    }
    // const name = req.body.name;
    // const email = req.body.email;
    // User.create({
    //     name: name,
    //     email: email
    // })
    // .then(result => {
    //     console.log('Created User');
    //     res.status(201).json({
    //         message: 'User created successfully. Congratulation',
    //         user: result
    //     });
    // })
    // .catch(err => {
    //     console.error(err);
    //     res.status(500).json({ message: 'Error creating user' });
    // });
}

exports.updateUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const updatedUserName = req.body.name;
        const updatedEmail = req.body.email;
        const user = await User.findByPk(userId);
        
        if(!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        user.name = updatedUserName;
        user.email = updatedEmail;
        await user.save();
        return res.status(200).json({ message: 'User updated!', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating user' });
    }
    // const userId = req.params.userId;
    // const updatedUserName = req.body.name;
    // const updatedEmail = req.body.email;
    // User.findByPk(userId)
    //     .then(user => {
    //         if (!user) {
    //             return res.status(404).json({ message: 'User not found!' });
    //         }
    //         user.name = updatedUserName;
    //         user.email = updatedEmail;
    //         return user.save();
    //     })
    //     .then(result => {
    //         res.status(200).json({ message: 'User updated!', user: result });
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         res.status(500).json({ message: 'Error updating user' });
    //     });
}

exports.deleteUser = async (req, res, next) => {
    try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found!' });
    }

    await User.destroy({
        where: { id: userId }
    });

    return res.status(200).json({ message: 'User deleted' });

    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting user' });
    }


    // const userId = req.params.userId;
    // User.findByPk(userId)
    //     .then(user => {
    //         if (!user) {
    //             return res.status(404).json({ message: 'User not found!' });
    //         }
    //         return User.destroy({
    //             where: { id: userId }
    //         });
    //     })
    //     .then(result => {
    //         res.status(200).json({ message: 'User deleted' });
    //     })
    //     .catch(err => {
    //         console.error(err);
    //         res.status(500).json({ message: 'Error deleting user' });
    //     });
}
