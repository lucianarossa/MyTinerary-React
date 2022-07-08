//guardo en itinerary lo que cree en models
const Itinerary = require('../models/itinerary')

//guardo los controladores y sus metodos para manioular la base de datos 

const commentsControllers = {
    addComment: async (req, res) => {
        const {itinerary, comment} = req.body.comment
        const user = req.user._id
        try {
            const newComment = await Itinerary.findOneAndUpdate({_id:itinerary}, {$push: {comments: {comment: comment, userId: user}}}, {new: true}).populate("comments.userId", {firstName:1, lastName:1, image:1})
            res.json({success: true, response: {newComment}, message: "Thanks for your comment!"})
        }
        catch(error) {
            console.log(error)
            res.json({success: false, message: "Oops! Something went wrong, try in a few minutes"})
        }

    },

    modifyComment: async (req, res) => {
        console.log(req.body)
        const {comment} = req.body;
        const user = req.user._id;
  
        try {
          const newComment = await Itinerary.findOneAndUpdate(
            { "comments._id": req.body.commentID },{ $set: { "comments.$.comment": req.body.comment }}, { new: true }).populate("comments.userId", {firstName:1, lastName:1, image:1});
  
          res.json({
            success: true,
            response: { newComment },
            message: "Your comment has been modified",
          });
          console.log(newComment)
        } catch (error) {
          console.log(error);
          res.json({
            success: true,
            message: "Something went wrong please try again in a few seconds",
          });
        }
      },
 

    deleteComment: async (req, res) => {
        const id = req.params.id
        const user = req.user._id
        try {
            const deleteComment = await Itinerary.findOneAndUpdate({"comments._id": id}, {$pull:{comments: {_id: id}}}, {new: true}).populate("comments.userId", {firstName:1, lastName:1, image:1})
            // console.log(deleteComment)
            res.json({success: true, response: {deleteComment}, message: "Your comment has been deleted!"})
        }
        catch(error) {
            console.log(error)
            res.json({success: false, message: "Oops! Something went wrong, try in a few minutes"})
        }
    },

}

module.exports = commentsControllers