const request = require('supertest')

describe('Post Request', () => {
    it('Post Create user', async () => {
        const response = request('https://petstore.swagger.io/v2')
        .post('/user')
        .send({
            "id": "63001",
            "username": "meow",
            "firstName": "ichi",
            "email": "meow@mail.com",
            "lastName": "komo",
            "password": "meowmeow",
            "phone": "0812345678",
            "userStatus": 1
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})