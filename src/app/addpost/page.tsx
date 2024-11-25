import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export default async function Post() {
    const allUsers = await prisma.post.findMany()
    console.log(allUsers)
    return "hello";
}
Post().catch((e) => {
    throw e
}).finally(async () => {
    await prisma.$disconnect()
})