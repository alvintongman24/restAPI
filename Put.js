import validator from "validator";
import createUser from "./controller/register.js";

async function update_Position(req, res) {
  const { userId } = req.params;
  //check if userId is provided

  if (!userId || validator.isEmpty(userId, { ignore_whitespace: true })) {
    return res.status(400).json({ message: "please provide the user id" });
  }

  try {
    const updated = await Users.findByIdUpdate(
      userId,
      {
        Position: Position,
      },
      {
        new: true,
      }
    );
  } catch (error) {
    console.log(error);
  }

  res.status(201).json({ message: "position updated successsfully" });
}

export default update_Position;
