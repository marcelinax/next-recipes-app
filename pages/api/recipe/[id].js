import mongoConnect from 'lib/mongoConnect';
import Recipe from 'models/recipe';

export default async (req, res) => {
    await mongoConnect();
    const { method } = req;

    switch (method) {
    case 'GET': {
        try {
            const { id } = req.query;
            const recipe = await Recipe.findById(id);
            console.log(recipe);
            res.status(200).json(recipe);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
        break;
    }
    }
    
};