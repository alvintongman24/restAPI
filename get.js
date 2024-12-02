import createUser from "./controller/register.js";
//get user info
async function Use(req, res) {
  //check our database for the user with email address
  const user = await createUser.find({ Gender: Gender });

  //check if students was not found
  if (user === null) {
    return res
      .status(400)
      .json({ message: `No record found of a:${Gender}` });
  }
  res.status(200).json({ message: "Success", record: user });
}

export default Use;
