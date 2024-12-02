import createUser from "./controller/register.js";

async function delete_user(req, res) {
  try {
    const result = await Users.deleteOne({ Position: Position });
    console.log(result);
    res.status(201).json({ message: "User account deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error occured" });
  }
}

export default delete_user;
