import { type NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  return new Response("Cookbook api route");
};
