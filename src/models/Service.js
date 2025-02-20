import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  category: String,
  description: String,
  sub_services: [
    {
      name: String,
      technologies: [String],
      description: String,
    },
  ],
});

export default mongoose.models.Service || mongoose.model("Service", ServiceSchema);
