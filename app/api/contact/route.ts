import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/lib/models/contact";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, email, phone } = await req.json();
    const newContact = await Contact.create({ name, email, phone });

    return NextResponse.json({ message: "Form submitted successfully!", data: newContact }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error submitting form", error }, { status: 500 });
  }
}
