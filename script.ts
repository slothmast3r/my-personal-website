// import { PrismaClient } from '@prisma/client'


const PrismaClient = require('@prisma/client').PrismaClient
const prisma = new PrismaClient()

async function main() {
    // const users = await prisma.user.findMany()

    const usersWithPosts = await prisma.user.findMany({
        include: {
            posts: true,
        },
    })
    console.dir(usersWithPosts, { depth: null })
    // console.log(user)

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })