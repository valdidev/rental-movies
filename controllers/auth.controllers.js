const UserModel = require("../models/User");
const {
    assertValidPasswordService,

} = require('../services/auth.services');

const jsonwebtoken = require('jsonwebtoken');


const authRegisterController = async (req, res) => {
    try {
        const { name, lastname, nick, email, rolId } = req.body;
        const newUser = await UserModel.create({
            name,
            lastname,
            nick,
            email,
            rolId
        });
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const authFindUserByIdController = async (req, res) => {
    try {
        const { id } = req.params;

        const userById = await UserModel.findByPk(id);
        res.json(userById);
    } catch (error) {
        res.json({ message: error.message });
    }
};

const authModifyUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, lastname, nick, email } = req.body;

        const newProfile = await UserModel.update({
            name,
            lastname,
            nick,
            email
        },
            {
                where: {
                    id
                }
            });

        if (newProfile == 0) return res.status(404).json({ message: "User not found" });

        res.status(200).json({ message: 'User profile changed' });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const authDeleteUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const userDestroyed = await UserModel.destroy({
            where: {
                id
            }
        });

        if(!userDestroyed) return res.status(404).json({message: 'User not found'});

        res.status(200).json({message: `user with ID: ${id} deleted`});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

const authLoginController = async (req, res) => {
    try {
        const { email } = req.body;

        const userFound = await UserModel.findOne({ where: { email } });
        if (!userFound) {
            res.status(404).json({ message: "User not found" });
            return;
        }

        const secret = process.env.JWT_SECRET;

        const jwt = jsonwebtoken.sign({
            rolId: userFound.rolId,
            nick: userFound.nick
        }, secret);

        res.status(200).json({
            message: "Login successful",
            jwt: jwt
        });

    } catch (error) {

    }

};

module.exports = {
    authRegisterController,
    authFindUserByIdController,
    authModifyUserController,
    authDeleteUserController,
    authLoginController
}