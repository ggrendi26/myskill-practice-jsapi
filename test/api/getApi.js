const request = require('supertest')

describe('Get Request', () => {
    it('Find pet information', async () => {
        const response = request('https://petstore.swagger.io/v2')
        .get('/store/inventory')
        console.log((await response).status)
        console.log((await response).body)
    })
})