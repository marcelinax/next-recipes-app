import messages from '@constants/messages';
import { convertFileToUrl } from '@utils/convertFileToUrl';
import { useState } from 'react';

export const useRecipeForm = (form = {
    title: '',
    description: '',
    category: '',
    difficulty: '',
    preparationTime: 0,
    servings: 0,
    photo: null,
    ingredients: [],
    preparationSteps: []
}) => {
    const [formData, setFormData] = useState(form);
    const [errors, setErrors] = useState([]);

    const validateForm = () => {
        let isValid = true;
        const errs = [];
        if (!formData.title) {
            isValid = false;
            errs.push(messages.TITLE_CANNOT_BE_EMPTY);
        }
        if (!formData.description) {
            isValid = false;
            errs.push(messages.DESCRIPTION_CANNOT_BE_EMPTY);
        }
        if (!formData.category) {
            isValid = false;
            errs.push(messages.CHOOSE_CATEGORY);
        }
        if (!formData.difficulty) {
            isValid = false;
            errs.push(messages.CHOOSE_DIFFICULTY);
        }
        if (!formData.photo) {
            isValid = false;
            errs.push(messages.CHOOSE_PHOTO);
        }
        if (!formData.preparationTime) {
            isValid = false;
            errs.push(messages.PREPARATION_TIME_CANNOT_BE_EMPTY);
        }
        if (formData.preparationTime <= 0) {
            isValid = false;
            errs.push(messages.INVALID_DATA);
        }
        if (!formData.servings) {
            isValid = false;
            errs.push(messages.SERVINGS_CANNOT_BE_EMPTY);
        }
        if (formData.servings <= 0) {
            isValid = false;
            errs.push(messages.INVALID_DATA);
        }
        if (formData.ingredients.length < 1) {
            isValid = false;
            errs.push(messages.INGREDIENTS_CANNOT_BE_EMPTY);
        }
        if (formData.preparationSteps.length < 1) {
            isValid = false;
            errs.push(messages.PREPARATION_STEPS_CANNOT_BE_EMPTY);
        }
        setErrors([...errs]);
        return isValid;
    };

    const inputHandler = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value.trim()
        });
        console.log(e.target.value.trim());
    };

    const ingredientsHandler = (ingredients) => setFormData({
        ...formData,
        ingredients: [...ingredients]
    });

    const preparationStepsHandler = (steps) => setFormData({
        ...formData,
        preparationSteps: [...steps]
    });

    const selectHandler = (e, items) => {
        setFormData({
            ...formData,
            [items]: e.target.value
        });
    };

    const imageFileHandler = async (e) => {
        const url = await convertFileToUrl(e.target.files);
        setFormData({
            ...formData,
            photo: url
        });
    };

    return { formData, errors, validateForm, inputHandler, selectHandler, imageFileHandler, ingredientsHandler, preparationStepsHandler };
};