import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

const userSchema = new mongoose.Schema({
    // name: {
    //     type: String
    // },
    username: {
        type: String,
        required: true,
        // unique: true
    },
    email: {
        type: String,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: null
    },
    updateAt: {
        type: Date,
        default: null
    }
});

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: null,
    }
});

const lovedSchema = new mongoose.Schema({
    lovedBy: {
        type: String,
        required: true,
    },
    lovedId: {
        type: String,
        required: true,
    },
    petId: {
        type: Number,
        required: true,
    },
    createAt: {
        type: Date,
        // required: true,
    }
});

autoIncrement.initialize(mongoose.connection);

userSchema.plugin(autoIncrement.plugin, 'user');
const User = new mongoose.model('user', userSchema);

petSchema.plugin(autoIncrement.plugin, 'pet');
const Pet = new mongoose.model('pet', petSchema);

lovedSchema.plugin(autoIncrement.plugin, 'loved');
const Loved = new mongoose.model('loved', lovedSchema);

// export { User as default, … };

export default { User, Pet, Loved };