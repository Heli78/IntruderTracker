const userSchema=new mongoose.Schema({
    mobileno:String,
    password:String,
    location: {
        type: {
          type: String,
          default: "Point",
        },
        coordinates: {
          type: [Number],
          required: true,
        },
      },
})

const User=mongoose.model("User",userSchema);
module.exports = User