import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';



// how our document look like
const lovedSchema = mongoose.Schema({
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

lovedSchema.plugin(autoIncrement.plugin, 'loved');
// we need to turn it into a model
const Loved = mongoose.model('loved', lovedSchema);

export default Loved;