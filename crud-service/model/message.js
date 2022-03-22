import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const messageSchema = mongoose.Schema({
    sendBy: {
        type: String,
        required: true,
    },
    sendTo: {
        type: Number,
        required: true,
    },
    createAt: {
        type: Date,
        required: true,
    }
});

autoIncrement.initialize(mongoose.connection);
petSchema.plugin(autoIncrement.plugin, 'pet');
// we need to turn it into a model
const Pet = mongoose.model('pet', petSchema);

export default Pet;