import { connectDB } from "@/lib/db";
import Service from "@/models/Service";

export async function GET() {
  await connectDB();
  const services = await Service.find();
  return Response.json(services, { status: 200 });
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const newService = await Service.create(body);
  return Response.json(newService, { status: 201 });
}

export async function DELETE(req) {
  await connectDB();
  await Service.deleteMany();
  return Response.json({ message: "All services deleted" }, { status: 200 });
}
