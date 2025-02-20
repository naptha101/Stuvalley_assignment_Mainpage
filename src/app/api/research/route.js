import { connectDB } from "@/lib/db";
import Research from "@/models/Research";

export async function GET() {
  await connectDB();
  const research = await Research.find();
  return Response.json(research, { status: 200 });
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const newResearch = await Research.create(body);
  return Response.json(newResearch, { status: 201 });
}

export async function DELETE(req) {
  await connectDB();
  await Research.deleteMany();
  return Response.json({ message: "All research deleted" }, { status: 200 });
}
