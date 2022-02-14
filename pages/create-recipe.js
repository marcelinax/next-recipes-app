import Form from '@components/Form/Form';
import Layout from '@layouts/Layout';


const CreateRecipe = () => {
    return (
        <Form/>
    );
};
  
CreateRecipe.getLayout = function getLayout(page) {
    return (
        <Layout>
            <></>
            {page}
        </Layout>
    );
};

export default CreateRecipe;