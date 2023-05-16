import makeATitle from "@/utils/openai/make-a-title"
import { NextResponse } from "next/server"

export async function GET(request, context) {
    console.log(`getting a request at /api/openai-new-title`)
    console.log(JSON.stringify(context.params, null, 4))
    const theTitle = await makeATitle(request.nextUrl.searchParams.get('title'));
    return NextResponse.json({
        text: `title to come`, 
        parameters: context.params, 
        searchParameters: request.nextUrl.searchParams.get('title'),
        title: theTitle
        // name: context.params.name
    })
}