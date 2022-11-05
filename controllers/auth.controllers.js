const UserModel = require("../models/User");


const authRegisterController = async (req, res) => {
    try {
        const {name, lastname, nick, email, rolId} = req.body;
        const newUser = await UserModel.create({
            name,
            lastname,
            nick,
            email,
            rolId
        });
        res.json(newUser);
    } catch (error) {
        res.send(error);
    }
    
};

const authFindUserByIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const userById = await UserModel.findByPk(id);
        res.json(userById);
    } catch (error) {
        res.json({message: error.message});
    }
};

const authModifyUserController = async (req, res) => {
    const { id } = req.params;
    const { name, lastname, nick, email } = req.body;

    const newProfile = await UserModel.update({
        name,
        lastname,
        nick,
        email
    },
    {where: {
        id: req.params.id
    }});
    
    res.json(newProfile);
};

const authDeleteUserController = async (req, res) => {
    const { id } = req.params;
    await UserModel.destroy({
        where: {
            id
        }
    });

    res.send(`user with ID: ${id} deleted`);
};

module.exports = {
    authRegisterController,
    authFindUserByIdController,
    authModifyUserController,
    authDeleteUserController
}