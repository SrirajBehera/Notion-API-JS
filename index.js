import { Client } from "@notionhq/client"

const notion = new Client({ auth: 'YOUR_SECRET_KEY' })

const databaseId = 'YOUR_DATABASE_ID'

async function addItem(req) {

  const { name, email, query, phone_number, owner_name, location, quality } = JSON.parse(JSON.stringify(req.body));

  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [
            {
              "text": {
                "content": name
              }
            }
          ]
        },
        Email: {
          email: email
        },
        Query: {
          rich_text: [
            {
              "text": {
                "content": query
              }
            }
          ]
        },
        "Phone Number": {
          phone_number: phone_number
        },
        "Owner Name": {
          rich_text: [
            {
              "text": {
                "content": owner_name
              }
            }
          ]
        },
        Location: {
          rich_text: [
            {
              "text": {
                "content": location
              }
            }
          ]
        },
        Quality: {
          rich_text: [
            {
              "text": {
                "content": quality
              }
            }
          ]
        }
      },
    })
    console.log(response)
    console.log("Success! Entry added.")
  } catch (error) {
    console.error(error.body)
  }
}

addItem(

  {
    "body": {
      "name": "Sriraj Behera",
      "email": "behera.sriraj2911@gmail.com",
      "query": "What is Vaahaq?",
      "phone_number": "1234567890",
      "owner_name": "Vaahaq",
      "location": "Navi Mumbai",
      "quality": "Best"
    }
  }
)