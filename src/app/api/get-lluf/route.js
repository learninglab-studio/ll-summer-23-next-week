export async function GET (request) {
    console.log(`getting a request at /api/get-lluf`)
    return new Response('lluf request to come')
}