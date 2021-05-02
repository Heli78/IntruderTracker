const { Router } = require('express');
const router = Router();
const messenger = require('./messenger');

const notify = async (req,res) => {
  const { longitude, latitude } = req.body;
  const lat = latitude.toString();
  const long = longitude.toString();
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
          results: [],
        });
      }

      nearByUsers = results;
      for (var i = 0; i < results.length; i++) {
        let receiver = results[i].id;
        console.log(receiver);
        messenger(receiver[i].mobileno , `Help Required at https://www.google.com/maps/@${lat},${long}`);
      }
}
}

module.exports = notify;