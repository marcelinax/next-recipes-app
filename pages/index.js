import difficulty from '../constants/difficulty';
import foodCategory from '../constants/foodCategory';
import FoodCategoryItem from '../src/components/Recipe/FoodCategoryItem';
import RecipeItem from '../src/components/Recipe/RecipeItem';

export default function Home() {

    const renderFoodCategoryItems = () => {
        return Object.values(foodCategory).map(category => (
            <FoodCategoryItem key={category} category={category}/>
        ));
    };
    
    return (
        <div className='container mx-auto flex flex-col mt-10'>
            <div className='w-full flex px-6'>
                {renderFoodCategoryItems()}
            </div>
            <div className="w-full flex mt-5 flex-wrap">
                <RecipeItem title='Gofry na słodko' difficulty={difficulty.EASY} time='20' description='Pyszny i niebanalny deser dla ukochanych naszych dzieci dasdjkashd ashdjas djash jashdjashdjkas dahsdjahsdjkahsdjhasljdhasjdhjashdjh jdkasjdklasjdklasjdkasjdkljsa' category={foodCategory.BREAKFAST} bgImg='https://cdn.galleries.smcloud.net/t/galleries/gf-RadU-dkf1-uYhP_gofry-na-slodko-przepis-z-programu-tvp2-pytanie-na-sniadanie-664x442-nocrop.jpg'/>
                <RecipeItem title='Spaghetti bolognese' difficulty={difficulty.MEDIUM} time='40' description='Pyszny makaron, który zadowoli każde podniebienie' category={foodCategory.LUNCH} bgImg='https://www.unileverfoodsolutions.pl/dam/global-ufs/mcos/NEE/calcmenu/recipes/PL-recipes/general/spaghetti-bolognese/main-header.jpg'/>
                <RecipeItem title='Pierogi z kapustą i grzybami' difficulty={difficulty.HARD} time='120' description='Najlepsze polskie danie jakie można przyrządzić' category={foodCategory.DINNER} bgImg='https://bi.im-g.pl/im/2f/66/19/z26633775IE,Pierogi-z-kapusta-i-grzybami-to-jedno-ze-swiateczn.jpg'/>
            </div>
        </div>
    );
}
