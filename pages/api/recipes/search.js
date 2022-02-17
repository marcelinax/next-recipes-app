import difficulty from '@constants/difficulty';
import foodCategory from '@constants/foodCategory';
import mongoConnect from 'lib/mongoConnect';
import Recipe from 'models/recipe';

export default async (req, res) => {
    await mongoConnect();
    
    try {
        const { query, page, hardness, cat} = req.body;
        let searchingRecipes = await Recipe.find().lean();

        if (query) {
            searchingRecipes = searchingRecipes.filter(recipe => recipe.title.toLowerCase().trim().includes(query.toLowerCase().trim()));
        }

        if (hardness && hardness !== 'all') {
            searchingRecipes = searchingRecipes.filter(recipe => recipe.difficulty === hardness);
        }

        if (cat && cat !== 'all') {
            searchingRecipes = searchingRecipes.filter(recipe => recipe.category === cat);
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