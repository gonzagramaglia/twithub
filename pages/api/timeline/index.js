
const timeline = [
    {
        id: 0,
        photo: 'https://i.postimg.cc/yYY569sz/rauch-photo.jpg',
        name: 'Guillermo Rauch',
        username: 'rauch',
        message: "The biggest product of the past 20 years, ChatGPT, is a website built with @nextjs. As AI eats the world, there's never been a better time to be a web developer."
    },
    {
        id: 1,
        photo: 'https://i.postimg.cc/PrsxBXjZ/sam-photo.jpg',
        name: 'Sam Altman',
        username: 'sam',
        message: "i am amazed by how fast it's possible to adjust to huge changes as 'the new normal'"
    },
    {
        id: 2,
        photo: 'https://i.postimg.cc/bJgT4CGS/naval-photo.jpg',
        name: 'Naval',
        username: 'naval',
        message: "The biggest near-term question in AI: Will open-source LLMs with decentralized training be competitive with closed-source and centralized LLMs?"
    },
    {
        id: 3,
        photo: 'https://i.postimg.cc/yYY569sz/rauch-photo.jpg',
        name: 'Guillermo Rauch',
        username: 'rauch',
        message: "The biggest product of the past 20 years, ChatGPT, is a website built with @nextjs. As AI eats the world, there's never been a better time to be a web developer."
    },
    {
        id: 4,
        photo: 'https://i.postimg.cc/PrsxBXjZ/sam-photo.jpg',
        name: 'Sam Altman',
        username: 'sam',
        message: "i am amazed by how fast it's possible to adjust to huge changes as 'the new normal'"
    },
    {
        id: 5,
        photo: 'https://i.postimg.cc/bJgT4CGS/naval-photo.jpg',
        name: 'Naval',
        username: 'naval',
        message: "The biggest near-term question in AI: Will open-source LLMs with decentralized training be competitive with closed-source and centralized LLMs?"
    },
    {
        id: 6,
        photo: 'https://i.postimg.cc/yYY569sz/rauch-photo.jpg',
        name: 'Guillermo Rauch',
        username: 'rauch',
        message: "The biggest product of the past 20 years, ChatGPT, is a website built with @nextjs. As AI eats the world, there's never been a better time to be a web developer."
    },
    {
        id: 7,
        photo: 'https://i.postimg.cc/PrsxBXjZ/sam-photo.jpg',
        name: 'Sam Altman',
        username: 'sam',
        message: "i am amazed by how fast it's possible to adjust to huge changes as 'the new normal'"
    },
    {
        id: 8,
        photo: 'https://i.postimg.cc/bJgT4CGS/naval-photo.jpg',
        name: 'Naval',
        username: 'naval',
        message: "The biggest near-term question in AI: Will open-source LLMs with decentralized training be competitive with closed-source and centralized LLMs?"
    }
]

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(timeline));
}