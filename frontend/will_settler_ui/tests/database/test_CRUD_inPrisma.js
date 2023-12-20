let { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  
  
  // Check if posts should be included in the query
  

  // Pass 'user' object into query
  const createUser = await prisma.assets.create(
    { data: { 
       // asset_Id: 'test-0',
        asset_Amount: 11,
        asset_Category: 1,
        asset_isAvailable : 1,
        asset_Name: 'asst-test-1',
        asset_Status: 1
    }, 
})
}

main()