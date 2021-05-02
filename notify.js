const { Router } = require('express');
const router = Router();
const messenger = require('./messenger');

const notify = async (req,res) => {
  const userData = await User.findOne({mobileno:req.body.mobileno});
  const lat = userData.coordinates[0].toString();
  const long = userData.coordinates[1].toString();
    await User.find({
      location: {
        $near: {
          $maxDistance: 100,
          $geometry: {
            type: "Point",
            coordinates: [long, lat],
          },
        },
      },
    }).find((error, results) => {
      if (error) {
        console.log(error);

        return res.status(200).json({
          success: false,
        });
      }

      nearByUsers = results;
      for (var i = 0; i < results.length; i++) {
        let receiver = results[i].id;
        console.log(receiver);
        messenger(receiver[i].mobileno , `Help Required at https://www.google.com/maps/@${lat},${long}`);
      }
      return res.status(200).json({
        success: true,
      });
}
}

module.exports = notify;