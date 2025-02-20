import mongoose from "mongoose";

const ResearchSchema = new mongoose.Schema({
  title: String,
  year: Number,
  type: String,
  description: String,
  doi: String,
});

export default mongoose.models.Research || mongoose.model("Research", ResearchSchema);
