import { join } from "path";
import { readdirSync } from "fs"
import { NextResponse } from 'next/server';

export async function GET() {
  const imageDir = join(process.cwd(), "public", "images");
  const images = readdirSync(imageDir);

  for (let index = 0; index < images.length; index++) {
    
    const random = Math.floor(Math.random() * (index + 1));

    const temp = images[index];
    images[index] = images[random];
    images[random] = temp;
  }

  return NextResponse.json(images);
}
