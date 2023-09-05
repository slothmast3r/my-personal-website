// import { PrismaClient } from '@prisma/client'
// import { randomBytes } from 'crypto';


const PrismaClient = require('@prisma/client').PrismaClient
const prisma = new PrismaClient()


// function generateRandomId(length) {
//     const bytes = randomBytes(Math.ceil(length / 2));
//     return bytes.toString('hex').slice(0, length);
// }

async function createUser(name, email) {
    // const randomId = generateRandomId(10); // Adjust the length as needed
    return prisma.user.create({
        data: {
            name,
            email,
        },
    });
}
async function main() {
    // const users = await prisma.user.findMany()
    await createUser("aaa","das@oewq.pl")
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