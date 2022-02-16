export const getFilteredErrorMessages = (errors, error) => {
    return errors && errors.filter(err => err === error)[0];
};