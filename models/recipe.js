import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const recipe = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    servings: {
        type: Number,
        required: true
    },
    preparationTime: {
        type: Number,
        required: true
    },
    ingredients: [{
        type: String,
        required: true
    }],
    preparationSteps: [{
        type: String,
        required: true
    }],
});

mongoose.models = {};

const Recipe = mongoose.model('Recipe', recipe);
export default Recipe;