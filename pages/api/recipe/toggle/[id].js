import mongoConnect from 'lib/mongoConnect';
import Recipe from 'models/recipe';

export default async (req, res) => {
    await mongoConnect();
  
    try {
        const { id } = req.query;
        const recipe = await Recipe.findById(id);
        recipe.isFavourite = !recipe.isFavourite;
        await recipe.save();
        res.status(200).json(recipe);
    }
    catch (error) {
        res.status(500).json({ error });
    }
 
};