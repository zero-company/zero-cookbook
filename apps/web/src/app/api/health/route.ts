"use server";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  return NextResponse.json({ message: "OK" });
};
