import difficulty from '../constants/difficulty';
import colors from '../themes/colors';

export const getDifficultyColor = (hardness) => {

    switch (hardness) {
    case difficulty.EASY:
        return colors.GREEN;
    case difficulty.MEDIUM:
        return colors.ORANGE;
    case difficulty.HARD:
        return colors.RED;
    default:
        return '';
    }
};