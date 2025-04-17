import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.vercel.app/blog");
    const data = await res.json();

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to fetch blog data." },
      { status: 500 }
    );
  }
}