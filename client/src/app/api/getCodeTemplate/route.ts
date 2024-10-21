import { NextResponse } from "next/server"

type TypeCode = {
	readonly language: string
	readonly code: string
}

export async function GET(request: Request): Promise<NextResponse> {
	const { searchParams } = new URL(request.url)
	const lang = searchParams.get("lang")

	if (typeof lang !== "string") {
		return NextResponse.json({ message: "Некорректный формат языка" }, { status: 400 })
	}

	const data = await import("./codes.json")
	const languages = lang.split(",").map(language => language.trim())

	const code: TypeCode | undefined = data.codes.find((item: TypeCode) => {
		const itemLanguages = item.language.split(",").map(language => language.trim())
		return itemLanguages.some(itemLang => languages.includes(itemLang))
	})

	if (!code) {
		return NextResponse.json({ message: "Код не найден" }, { status: 404 })
	}

	return NextResponse.json(code)
}
