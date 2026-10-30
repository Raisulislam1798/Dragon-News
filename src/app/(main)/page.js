import { Redacted } from "next/font/google"
import { redirect } from "next/navigation"

const redairect_id="0"
export default async function Home() {
  redirect(`/categoryes/${redairect_id}`)
}
