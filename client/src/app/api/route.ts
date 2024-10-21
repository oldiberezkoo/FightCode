import { NextResponse } from "next/server"

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const query = searchParams.get("query")
	return NextResponse.json({
		message: "Данные успешно получены",
		query: query || "Параметр не указан",
	})
}
