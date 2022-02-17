import difficulty from '@constants/difficulty';
import mongoConnect from 'lib/mongoConnect';
import Recipe from 'models/recipe';

export default async (req, res) => {
    await mongoConnect();
    
    try {
        const { query, page, hardness } = req.body;
        let searchingRecipes = await Recipe.find().lean();

        if (query) {
            searchingRecipes = searchingRecipes.filter(recipe => recipe.title.toLowerCase().trim().includes(query.toLowerCase().trim()));
        }

        if (hardness && hardness !== difficulty.ALL) {
            searchingRecipes = searchingRecipes.filter(recipe => recipe.difficulty === hardness);
        }
        
        const totalRecipes = searchingRecipes.length;

        if (page) {
            const limit = 1;
            let startIndex = (page - 1) * limit;
            let endIndex = page * limit;

            searchingRecipes = searchingRecipes.slice(startIndex, endIndex);
        }
        res.status(201).json({searchingRecipes, totalRecipes});
    }
    catch (error) {
        res.status(500).json({error});
    }
    
};