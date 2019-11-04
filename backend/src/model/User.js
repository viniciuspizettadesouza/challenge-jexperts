const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    telephone: {
        type: String,
        select: false,
    },
    position: {
        type: String,
        required: true,
        lowercase: true,
    },
    login: {
        type: String,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        lowercase: true,
    },
    cpf: {
        type: String,
        required: true,
        lowercase: true,
    },
    superior_cpf: {
        type: String,
        lowercase: true,
    },
    address: {
        street: {
            type: String,
            lowercase: true,
        },
        number: {
            type: String,
            lowercase: true,
        },
        complement: {
            type: String,
            lowercase: true,
        },
        district: {
            type: String,
            lowercase: true,
        },
        city: {
            type: String,
            lowercase: true,
        },
        state: {
            type: String,
            lowercase: true,
        },
        cep: {
            type: String,
            lowercase: true,
        },
    }
}, {
    timestamps: true,
});


module.exports = model('user', UserSchema);