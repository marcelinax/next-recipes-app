import constants from '@constants/constants';
import foodCategory from '@constants/foodCategory';
export const translateCategory = (category) => {
    const [ALL, BREAKFAST, LUNCH, DINNER, DESSERT, CAKE] = Object.keys(foodCategory);
    switch (category.toUpperCase()) {
    case ALL: 
        return constants.ALL;
    case BREAKFAST: 
        return constants.BREAKFAST;
    case CAKE: 
        return constants.CAKE;
    case DESSERT: 
        return constants.DESSERT;
    case LUNCH: 
        return constants.LUNCH;
    case DINNER: 
        return constants.DINNER;
    default:
        return '';
    }
};