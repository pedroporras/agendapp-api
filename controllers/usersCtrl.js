import usersService from "../services/usersServices";

const profile = async (req, res) => {
  const {idUser} = req.user;
  res.send("profile: " + idUser);
};

const create = (req, res) => {
  res.send("create a user");
};

const getAll = async (req, res) => {
  try {
    const users = await usersService.getAll();
    // TODO: se debe modificar la informacion que se envia
    res.json(users);
  } catch (error) {
    res.status(error.errorStatus).send(error.message);
  }
};

export default {
  profile,
  create,
  getAll,
};
