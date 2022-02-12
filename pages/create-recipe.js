import Layout from '@layouts/Layout';


export default function CreateRecipe() {
   
    return (
        <h1>Create Recipe</h1>
    );
}
  
CreateRecipe.getLayout = function getLayout(page) {
    return (
        <Layout>{page}</Layout>
    );
};
