import {PrismaClient} from "@prisma/client";
import {map} from "yaml/dist/schema/common/map";

const prisma = new PrismaClient()

export default async function Post() {
    const allUsers = await prisma.post.findMany()
    console.log(allUsers)
    return (allUsers.map((user) => {
        return (
            <div key={user.id}>
                <h2>{user.title}</h2>
                <p>{user.body}</p>
            </div>
        );
    }))
}
Post().catch((e) => {
    throw e
}).finally(async () => {
    await prisma.$disconnect()
})