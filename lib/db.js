import { MongoClient } from 'mongodb'

export async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb+srv://m-hazara-77-1234:m-hazara-77-1234@cluster0.n9xn2.mongodb.net/auth-demo?retryWrites=true&w=majority')

  return client
}