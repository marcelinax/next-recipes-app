
import Layout from '@layouts/Layout';
import EditForm from '@components/Form/EditForm';
import { apiClient } from 'api/apiClient';


const EditRecipeById = ({recipe}) => {
    return (
        <Layout >
            <EditForm recipe={recipe} />
        </Layout>
    );
};

export const getServerSideProps = async (context) => {

    const id = context.params.id;
    const res = await apiClient.get(`recipe/${id}`, {
        params: {
            id
        }
    });
   
    const recipe = res.data;
    return {props: {recipe}};
};

export default EditRecipeById;