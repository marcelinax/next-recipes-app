import mongoConnect from 'lib/mongoConnect';
import Recipe from 'models/recipe';

export default async (req, res) => {
    await mongoConnect();

    try {
        const favRecipes = await Recipe.find({ isFavourite: true });
        res.status(201).json(favRecipes);
    } catch (error) {
        res.status(500).json({error});
    }
};