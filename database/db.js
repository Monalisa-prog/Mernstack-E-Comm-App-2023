import mongoose from "mongoose";
import colors from "colors";

const Connection = async (USERNAME, PASSWORD, HOSTNAME, DATABASE) => {
  const URL = `mongodb+srv://${encodeURIComponent(
    USERNAME
  )}:${encodeURIComponent(
    PASSWORD
  )}@${HOSTNAME}/${DATABASE}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Database is connected Successfully ${mongoose.connection.host}`.bgGreen
        .white
    );
  } catch (error) {
    console.log("Error in Mongodb", error.message);
  }
};
export default Connection;
