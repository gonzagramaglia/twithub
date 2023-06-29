import { db } from "@/firebase/admin";

export default async (request, response) => {
  const { query } = request;
  const { id } = query;

  await db.collection('tweets').doc(id).get()
    .then((doc) => {
    const data = doc.data();
    const id = doc.id;
    const { createdAt } = data;

    response.json({
        ...data,
        id,
        createdAt: +createdAt.toDate()
    })


    }).catch( () => {
        response.status(404).end()
      }
    )
}

