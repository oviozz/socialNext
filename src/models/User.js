
    import mongoose, {Schema} from "mongoose";


const userSchema = new Schema(
    {

        username: {
            type: String,
            default: ""
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        bio:{
            type: String,
            default: ""
        },
        profilePic: {
            type: String,
            default: ""
        },
        following: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                },
            }
        ],
        followers: [
            {
                userId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
                },
            }
        ],
        postCount: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)


export default mongoose.models.User || mongoose.model("User", userSchema)