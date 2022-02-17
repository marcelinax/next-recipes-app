import constants from '@constants/constants';
import difficulty from '@constants/difficulty';

export const translateDifficulty = (hardness) => {
    const [ALL, EASY, MEDIUM, HARD] = Object.keys(difficulty);
    console.log(hardness);
    switch (hardness) {
    case ALL: 
        return constants.ALL;
    case EASY: 
        return constants.EASY;
    case MEDIUM: 
        return constants.MEDIUM;
    case HARD: 
        return constants.HARD;
    default:
        return '';
    }
};