import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const petSchema = mongoose.Schema({
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
        default: null,
    }
});

autoIncrement.initialize(mongoose.connection);
petSchema.plugin(autoIncrement.plugin, 'pet');
// we need to turn it into a model
const Pet = mongoose.model('pet', petSchema);

export default Pet;