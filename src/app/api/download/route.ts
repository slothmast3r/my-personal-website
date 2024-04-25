import { notFound } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"
import fs from "fs/promises"
import { NextApiRequest } from "next"

export async function GET(req: NextRequest, {}) {
  console.log("aa")
  const filePath = "public/En-Oskar_Straszynski_CV.pdf"

  const { size } = await fs.stat(filePath)
  const file = await fs.readFile(filePath)
  const extension = filePath.split(".").pop()

  return new NextResponse(file, {
    headers: {
      "Content-Disposition": `attachment; filename="Oskar-Straszynski-CV.${extension}"`,
      "Content-Length": size.toString(),
    },
  })
}
