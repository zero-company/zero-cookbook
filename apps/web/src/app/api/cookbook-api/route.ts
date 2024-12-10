"use server";
import { NextResponse, NextRequest } from "next/server";
import queryString from "query-string";

export const GET = async (req: NextRequest) => {
  const query = {
    ingredients: queryString.parseUrl(req.url).query["ingredients[]"],
    apiKey: process.env["SPOONACULAR_API_KEY"],
  };

  const recipes = await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?${queryString.stringify(query, { arrayFormat: "comma" })}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => res.json());

  return NextResponse.json({
    message: "Cookbook api route",
    date: new Date(),
    recipes,
  });
};
