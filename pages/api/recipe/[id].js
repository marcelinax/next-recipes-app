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
            res.status(200).json(recipe);
        }
        catch (error) {
            res.status(500).json({ error });
        }
        break;
    }
    case 'PUT': {
        try {
            const { id } = req.query;
            const data = req.body;
            const recipe = await Recipe.findByIdAndUpdate(id , {...data}, {new: true});
            res.status(200).json(recipe);
        }
        catch (error) {
            res.status(403).json({ error });
        }
        break;
    }
    case 'DELETE': {
        try {
            const { id } = req.query;
            await Recipe.findByIdAndDelete(id);
            res.status(200).end();
        }
        catch (error) {
            res.status(500).json({ error });
        }
        break;
    }
    }
};