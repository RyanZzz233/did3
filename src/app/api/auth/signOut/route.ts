import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  cookies().delete("address");
  //console.log("really out")
  return NextResponse.json({
    success: true,
  });
}
