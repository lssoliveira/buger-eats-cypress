var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '54999887766',
            address: {
                postalcode: '99010001',
                street: 'Avenida Brasil',
                number: '500',
                details: 'apto. 50',
                district: 'Centro',
                city_state: 'Passo Fundo/RS'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        return data
    }
}