let messages = [];
let id = 0;

module.exports = {

  //Create - Should be able to create a message using text and time off of the request body.
  //Should be able to assign a unique id to the message.
  create: (req, res) => {
    const { text, time } = req.body;
    messages.push({ id, text, time });
    id++;
    res.status(200).send(messages);
  },

  //Read - Should be able to return the messages array.
    read: (req, res) => {
      //console.log(res)
      res.status(200).send(messages)
    },
  //Update - Should be able to update the text property of a message using the request body.
  update: (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateID)
    let message = messages[messageIndex]; 

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    res.status(200).send(messages);
  },
   //Delete - Should be able to delete a message using an id url parameter.
   delete: (req, res) => {
    const deleteID = req.params.id;    
    messageIndex = messages.findIndex(message => message.id == deleteID);
    messages.splice(messageIndex, 1);
    res.status(200).send(messages);
  },
}