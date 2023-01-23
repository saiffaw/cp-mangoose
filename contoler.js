import Users from "./model.js";

const addUser = async (req, res) => {
  const user = new Users(req.body);
  try {
    await user.save();
    res.status(200).json({ message: "added user" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addUsders = async (req, res) => {
  try {
    const user = await Users.find();
    res.status(201).send(user);
  } catch (error) {
    res.send(500).send(error.message);
  }
};
const findUser = async (req, res) => {
  try {
    const user = await Users.find({ _id: req.params.id });
    res.status(201).send(user);
  } catch (error) {
    res.send(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};
const deletUsers = async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "user deleted" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export default { addUser, addUsders, findUser, updateUser, deletUsers };
