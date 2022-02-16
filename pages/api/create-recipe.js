import mongoConnect from 'lib/mongoConnect';
import Recipe from 'models/recipe';

export default async (req, res) => {
    await mongoConnect();
    try {
        const data = req.body;
        const recipe = await Recipe.create({
            ...data
        });
        
        res.status(200).json(recipe);
    } catch (error) {
        console.error(error);
        res.status(404).json({error});
    }
};