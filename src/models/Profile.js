import { model, models, Schema } from "mongoose";

const profileSchema = new Schema({
    article: {
        type: String,
        required: true
    },
    explanations: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }, 
    phoneNumber: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    firm: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    constructionDate: {
        type: String,
        required: true,
    },
    amenities: [{text: String}],
    rules: [{sentence: String}],
    createdAt: {
        type: Date,
        date: () => Date.now(),
        immutable: true
    },
    // publishing: false
})

const Profile = models?.Profile || model("Profile", profileSchema)

export default Profile