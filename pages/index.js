import HomepageLayout from '@layouts/Homepage.layout';
import foodCategory from '../constants/foodCategory';
import FoodCategoryItem from '../src/components/FoodCategoryItem';
import RecipeListItem from './../src/components/Recipe/RecipeListItem';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRefreshRecipes } from 'hooks/useRefreshRecipes';
import Pagination from '@components/Global/Pagination';
import constants from '@constants/constants';
import Spinner from '@components/Global/Spinner';


const Home = () => {

    const [search, setSearch] = useState(''); 
    const [page, setPage] = useState(1); 
    const [difficultySelect, setDifficultySelect] = useState('all');
    const [category, setCategory] = useState('all');
    const recipes = useSelector(state => state.recipes.recipes);
    const {refresh: refreshRecipes, loading} = useRefreshRecipes();

    useEffect(() => {
        renderRecipes();
    }, [recipes]);

    useEffect(() => {
        rerenderRecipes();
    }, [search, difficultySelect, category, page]);
    

    const rerenderRecipes = () => {
        refreshRecipes({
            query: search,
            hardness: difficultySelect,
            cat: category,
            page
        });
    };
    
    const renderFoodCategoryItems = () => {
        return Object.entries(foodCategory).map(entry => [<FoodCategoryItem key={entry[0]} category={entry[1]} isChosen={category === entry[0].toLowerCase()} onClick={() => categoryHandler(entry[0].toLowerCase())}/>]);
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

    const categoryHandler = (category) => {
        setCategory(category);
    };
    const pageHandler = (_, value) => {
        setPage(value);
    };
    

    return (
        <HomepageLayout search={search} setSearch={searchHandler} difficultySelect={difficultySelect} setDifficultySelect={difficultySelectHandler}>
            <div className='w-full flex px-6'>
                {renderFoodCategoryItems()}
            </div>
            <div className={`w-full flex mt-5 flex-wrap ${recipes.searchingRecipes.length < constants.LIMIT_PAGE && 'mb-5'}`}>
                {(recipes && !loading) ? renderRecipes() : <Spinner/>}
            </div>
            {recipes.searchingRecipes.length >= constants.LIMIT_PAGE &&
                <div className={`w-full flex items-center justify-center mt-20 mb-10 ${recipes.searchingRecipes.length > constants.LIMIT_PAGE ? 'mt-10' : ''}`}>
                    <Pagination page={page} setPage={pageHandler} count={Math.ceil(recipes.totalRecipes / constants.LIMIT_PAGE)} />
                </div>
            }
        </HomepageLayout>
    );
};

export default Home;