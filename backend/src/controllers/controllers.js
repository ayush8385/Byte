const mongoose = require("mongoose");
const checkCollection = async (collectionName) => {
  const collectionNames = (
    await mongoose.connection.db.listCollections().toArray()
  ).map((col) => col.name);
  if (!collectionNames.includes(collectionName)) {
    await mongoose.connection.db.createCollection(collectionName);
    console.log(`Collection '${collectionName}' created.`);
  } else {
    console.log(`Collection '${collectionName}' already exists.`);
  }
};

const getModel = (collectionName) => {
  try {
    return mongoose.model(collectionName);
  } catch (error) {
    const schema = new mongoose.Schema(
      {},
      { strict: false, collection: collectionName }
    );
    return mongoose.model(collectionName, schema);
  }
};

const saveChats = async (req, res) => {
  try {
    const { currentChatHistory, userEmail, sessionId } = req.body;
    const collectionName = userEmail.replace(/[^a-zA-Z0-9]/g, "_");
    await checkCollection(collectionName);
    const ChatModel = getModel(collectionName);
    const existingSesion = await ChatModel.findOne({sessionId});
    console.log('existingSesion', existingSesion)
    if(existingSesion && existingSesion.currentChatHistory.length <= currentChatHistory.length){
      await ChatModel.findOneAndUpdate({sessionId},{currentChatHistory},{new:true})
      console.log(
        `${currentChatHistory.length} documents were updated into the collection '${collectionName}'.`
      );
      res.status(201).json({ message: "Chats updated successfully" });
    }
    else{
      await ChatModel.create({ currentChatHistory, sessionId });
      console.log(
        `${currentChatHistory.length} documents were inserted into the collection '${collectionName}'.`
      );
      res.status(200).json({ message: "Chats saved successfully" });
    }
    
  } catch (error) {
    console.error("Error in saveChats:", error);
    res.json({ message: "Error saving chats", error });
  }
};

const getHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const model = getModel(userId);
    model
      .find({})
      .then((data) => {
        res.status(200).json({data: data});
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.error("Error in Fetching:", error);
    res.status(500).json({ message: "Error Fetching chats", error });
  }
};

module.exports = { saveChats, getHistory };
