import prisma from "@/app/lib/prisma"

export async function POST(request) {
    const { word_id, user_email } = await request.json()
    const data = { word_id, user_email }
    console.log(data)

    const createCollection = await prisma.collection.create({ data })

    if (!createCollection) return Response.json({ status: 500, isCreated: false })
        else return Response.json({ status: 200, isCreated: true })
} 