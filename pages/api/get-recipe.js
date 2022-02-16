import Recipe from 'models/recipe';
import mongoConnect from 'lib/mongoConnect';

export default async (req, res) => {
    await mongoConnect();
    try {
        const { id } = req.query;
        const recipe = await Recipe.findById(id);
        res.status(200).json(recipe);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
};