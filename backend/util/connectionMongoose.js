import mongoose from "mongoose";

async function connectionMongoose() {
  const _pwd = "Dci1234";
  const _database = "restaurantAufgabe";
  const _user = "minanfdc";
  const _cluster = "cluster0.pdbvdkn.mongodb.net";
  const _uri = `mongodb+srv://${_user}:${_pwd}@${_cluster}/${_database}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(_uri);
    const collections = (
      await mongoose.connection.db.listCollections().toArray()
    ).map((el) => el.name);
    console.log("connected to db: ", collections);
    return true;
  } catch (err) {
    console.error("could not connect to mongoose", err);
    return false;
  }
}

export {connectionMongoose}