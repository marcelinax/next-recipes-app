import mongoConnect from 'lib/mongoConnect';
import Recipe from 'models/recipe';

export default async (req, res) => {
    await mongoConnect();
    const { method } = req;

    switch (method) {
    case 'GET': {
        try {
            const recipes = await Recipe.find();
            res.status(200).json(recipes);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
        break;
    }
    case 'POST': {
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
        break;
    }
    }
};