import HomepageLayout from '@layouts/Homepage.layout';
import difficulty from '../constants/difficulty';
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
            <RecipeListItem key={recipe.id} id={recipe.id} bgImg={recipe.photo} category={recipe.category} description={recipe.description} difficulty={recipe.difficulty} time={recipe.timePreparation} title={recipe.tile}/>
        ));
    };
    return (
        <>
            <div className='w-full flex px-6'>
                {renderFoodCategoryItems()}
            </div>
            <div className="w-full flex mt-5 flex-wrap">
                {recipes ? renderRecipes() : <p>loading</p>}
                <RecipeListItem id='1' title='Gofry na słodko' difficulty={difficulty.EASY} time='20' description='Pyszny i niebanalny deser dla ukochanych naszych dzieci' category={foodCategory.singular.BREAKFAST} bgImg='https://cdn.galleries.smcloud.net/t/galleries/gf-RadU-dkf1-uYhP_gofry-na-slodko-przepis-z-programu-tvp2-pytanie-na-sniadanie-664x442-nocrop.jpg'/>
                <RecipeListItem id='2' title='Spaghetti bolognese' difficulty={difficulty.MEDIUM} time='40' description='Pyszny makaron, który zadowoli każde podniebienie' category={foodCategory.singular.LUNCH} bgImg='https://www.unileverfoodsolutions.pl/dam/global-ufs/mcos/NEE/calcmenu/recipes/PL-recipes/general/spaghetti-bolognese/main-header.jpg'/>
                <RecipeListItem id='3' title='Pierogi z kapustą i grzybami' difficulty={difficulty.HARD} time='120' description='Najlepsze polskie danie jakie można przyrządzić' category={foodCategory.singular.DINNER} bgImg='https://bi.im-g.pl/im/2f/66/19/z26633775IE,Pierogi-z-kapusta-i-grzybami-to-jedno-ze-swiateczn.jpg'/>
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