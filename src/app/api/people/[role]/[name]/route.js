import { NextResponse } from "next/server"

export async function GET(request, context) {
    console.log(`getting a request at /api/get-lluf`)
    console.log(JSON.stringify(context.params, null, 4))

    return NextResponse.json({
        text: `lluf request to come`, 
        parameters: context.params, 
        searchParameters:request.nextUrl.searchParams.get('test'),
        name: context.params.name
    })
}