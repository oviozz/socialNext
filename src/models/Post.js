import mongoose, {Schema} from "mongoose";

const postScheme = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        caption: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        likes: [{
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            }
        }],
        comments: [{
            userId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true
            },
            commentText: {
                type: String,
                required: true
            }
        }]
    },
    {
        timestamps: true
    }
)

export default mongoose.models.Post || mongoose.model("Post", postScheme)