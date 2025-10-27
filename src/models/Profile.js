import { model, models, Schema } from "mongoose";

const profileSchema = new Schema(
  {
    article: {
      type: String,
      required: true,
    },
    explanations: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    price: {
      type: String, // must be Number
      required: true,
    },
    firm: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    constructionDate: {
      type: String,
      required: true,
    },
    // amenities: [{text: String}],
    amenities: {
      type: [{ text: String }],
      default: [],
    },
    // rules: [{sentence: String}],
    rules: {
      type: [{ sentence: String }],
      default: [],
    },
    published: {
      type: Boolean,
      default: false,
    },
    email: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "Client",
    },
  },
  { timestamps: true }
);

const Profile = models?.Profile || model("Profile", profileSchema);

export default Profile;
