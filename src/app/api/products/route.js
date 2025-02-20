import { connectDB } from "@/lib/db";
import Product from "@/models/Product";

export async function GET() {
  await connectDB();
  const products = await Product.find();
  return Response.json(products, { status: 200 });
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const newProduct = await Product.create(body);
  return Response.json(newProduct, { status: 201 });
}

export async function DELETE(req) {
  await connectDB();
  await Product.deleteMany();
  return Response.json({ message: "All products deleted" }, { status: 200 });
}
