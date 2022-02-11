import RecipeItem from '../src/components/Recipe/RecipeItem';

export default function Home() {
    return (
        <div className=" container mx-auto flex mt-10 flex-wrap">
            <RecipeItem title='Gofry na słodko' difficulty='Łatwy' time='20' description='Pyszny i niebanalny deser dla ukochanych naszych dzieci dasdjkashd ashdjas djash jashdjashdjkas dahsdjahsdjkahsdjhasljdhasjdhjashdjh jdkasjdklasjdklasjdkasjdkljsa' category='ŚNIADANIE' bgImg='https://cdn.galleries.smcloud.net/t/galleries/gf-RadU-dkf1-uYhP_gofry-na-slodko-przepis-z-programu-tvp2-pytanie-na-sniadanie-664x442-nocrop.jpg'/>
            <RecipeItem title='Spaghetti bolognese' difficulty='Średni' time='40' description='Pyszny makaron, który zadowoli każde podniebienie' category='OBIAD' bgImg='https://www.unileverfoodsolutions.pl/dam/global-ufs/mcos/NEE/calcmenu/recipes/PL-recipes/general/spaghetti-bolognese/main-header.jpg'/>
            <RecipeItem title='Pierogi z kapustą i grzybami' difficulty='Trudny' time='120' description='Najlepsze polskie danie jakie można przyrządzić' category='KOLACJA' bgImg='https://bi.im-g.pl/im/2f/66/19/z26633775IE,Pierogi-z-kapusta-i-grzybami-to-jedno-ze-swiateczn.jpg'/>
        </div>
    );
}
