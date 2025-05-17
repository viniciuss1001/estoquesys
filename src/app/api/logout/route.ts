import { NextResponse } from "next/server"

export async function POST() {
  const response = NextResponse.json({ mensagem: "Logout realizado" })
  
  response.cookies.set("token", "", { maxAge: 0, path: "/" })
  
  return response
}