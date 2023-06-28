import { db } from "@/firebase/admin";

export default async (request, response) => {
  const { query } = request;
  const { id } = query;

  await db.collection('tweets').doc(id).get()
    .then((doc) => {
    const data = doc.data();
    response.json(data)
    }).catch( () => {

      }
    )
}

