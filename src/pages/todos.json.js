export const GET = async ({ params, request }) => {
    return new Response(JSON.stringify([
        'Buy Milk',
        'Create new Astro project'
    ]))
}