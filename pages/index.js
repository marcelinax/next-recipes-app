import HomepageLayout from '@layouts/Homepage.layout';
import foodCategory from '../constants/foodCategory';
import FoodCategoryItem from '../src/components/FoodCategoryItem';
import RecipeListItem from './../src/components/Recipe/RecipeListItem';
import { apiClient } from 'api/apiClient';

const Home = ({ recipes }) => {
    
    const renderFoodCategoryItems = () => {
        return Object.values(foodCategory.plural).map(category => (
            <FoodCategoryItem key={category} category={category}/>
        ));
    };
    const renderRecipes = () => {
        return recipes && recipes.map(recipe => (
            <RecipeListItem key={recipe._id} id={recipe._id} bgImg={recipe.photo} category={recipe.category} description={recipe.description} difficulty={recipe.difficulty} time={recipe.preparationTime} title={recipe.title}/>
        ));
    };
    return (
        <>
            <div className='w-full flex px-6'>
                {renderFoodCategoryItems()}
            </div>
            <div className="w-full flex mt-5 flex-wrap">
                {recipes && renderRecipes()}
            </div>
        </>
    );
};

export const getServerSideProps = async () => {
    const res = await apiClient.get('get-recipes');
    const recipes = res.data;
    return {props: {recipes}};
};
  
Home.getLayout = function getLayout(page) {
    return (
        <HomepageLayout>{page}</HomepageLayout>
    );
};


export default Home;