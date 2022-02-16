import Recipe from 'models/recipe';
import mongoConnect from 'lib/mongoConnect';

export default async (req, res) => {
    await mongoConnect();
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
};