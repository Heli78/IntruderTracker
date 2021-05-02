const User = require("./user");

const updateLocation = async (req,res) => {
    const mobileno = req.body.mobileno;
    const { longitude, latitude } = req.body;
  const lat = latitude.toString();
  const long = longitude.toString();
  User.updateOne({mobileno: mobileno}, {
      $set : {coordinates: [lat,long]}
  });
}

module.exports = updateLocation