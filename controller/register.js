import Users from "../models/User.js";

async function createUser(req, res) {
  console.log("Hello");
  try {
    const { Name, Age, Gender, Department, Position, Access, Level } = req.body;

    const NewUser = await Users.create({
      Name: Name,
      Age: Age,
      Gender: Gender,
      Department: Department,
      Position: Position,
      Access: Access,
      Level: Level,
    });

    console.log(NewUser);
    res.status(200).json({ message: "Registered successfully" });
  } catch (error) {
    console.log(`This is an error ${error}`);
    res.status(404).json({ message: "error occured" });
  }
}

export default createUser;
