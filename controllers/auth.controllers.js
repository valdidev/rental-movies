const UserModel = require("../models/User");
const {
 assertValidPasswordService,

} = require('../services/auth.services');

const jsonwebtoken = require('jsonwebtoken');


const authRegisterController = async (req, res) => {
  /*   const body = req.body;
    // validate password
  try {
    assertValidPasswordService(body.password);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid password: " + error.message });
    return;
  }
  // validate email is valid
  try {
    assertEmailIsValid(body.email);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Email is invalid: " + error.message });
    return;
  } */

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

const authLoginController = async (req, res) => {
    try {
        const { email } = req.body;

        const userFound = await UserModel.findOne({where: {email}});
        if(!userFound) {
            res.status(404).json({message: "User not found" });
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