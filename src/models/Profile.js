import { model, models, Schema } from "mongoose"

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
        type: String,
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
    published: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        date: () => Date.now(),
        immutable: true
    },
})

const Profile = models?.Profile || model("Profile", profileSchema)

export default Profile