const mongoose = require('mongoose');

const MascotaSchema = new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now()
    },
    microchip: {
        type: String,
        unique: true,
        required: true
    },
    pet_name: String,
    owner_name: String,
    species: String,
    geolocation: {
        latitude: String,
        longitude: String,
    },
    vital_signs: {
        temperature: String,
        heart_rate: String,
        breathing_frecuency: String
    }
});

const Mascota = mongoose.model('Mascota',MascotaSchema);

module.exports = Mascota;