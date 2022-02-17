import HomepageLayout from '@layouts/Homepage.layout';
import foodCategory from '../constants/foodCategory';
import FoodCategoryItem from '../src/components/FoodCategoryItem';
import RecipeListItem from './../src/components/Recipe/RecipeListItem';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRefreshRecipes } from 'hooks/useRefreshRecipes';
import difficulty from '@constants/difficulty';

const Home = () => {

    const [search, setSearch] = useState(''); 
    const [difficultySelect, setDifficultySelect] = useState(difficulty.ALL);
    const recipes = useSelector(state => state.recipes.recipes);
    const {refresh: refreshRecipes} = useRefreshRecipes();

    useEffect(() => {
        renderRecipes();
    }, [recipes]);

    useEffect(() => {
        rerenderRecipes();
    }, [search, difficultySelect]);
    

    const rerenderRecipes = () => {
        refreshRecipes({
            query: search,
            hardness: difficultySelect
        });
    };
    
    const renderFoodCategoryItems = () => {
        return Object.values(foodCategory.plural).map(category => (
            <FoodCategoryItem key={category} category={category}/>
        ));
    };
    const renderRecipes = () => {
        return recipes && recipes.searchingRecipes.map(recipe => (
            <RecipeListItem key={recipe._id} id={recipe._id} bgImg={recipe.photo} category={recipe.category} description={recipe.description} difficulty={recipe.difficulty} time={recipe.preparationTime} title={recipe.title}/>
        ));
    };


    const searchHandler = (e) => {
        setSearch(e.target.value);
    };
    const difficultySelectHandler = (e) => {
        setDifficultySelect(e.target.value);
    };

    return (
        <HomepageLayout search={search} setSearch={searchHandler} difficultySelect={difficultySelect} setDifficultySelect={difficultySelectHandler}>
            <div className='w-full flex px-6'>
                {renderFoodCategoryItems()}
            </div>
            <div className="w-full flex mt-5 flex-wrap">
                {recipes && renderRecipes()}
            </div>
        </HomepageLayout>
    );
};

// export const getServerSideProps = async ({req}) => {
//     // const res = await apiClient.get('recipes');
//     // const recipes = res.data;
//     // return { props: { recipes } };
//     const {query} = req;
    
//     const res = await apiClient.post('recipes/search', {
//         page: 1
//     });
//     console.log(query);
//     const recipes = res.data;
//     return {props: {recipes}};
// };


export default Home;