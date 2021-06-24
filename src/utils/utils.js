import { USER_NAME } from './constants';

export const setLocalStorage = name => {
  try {
    localStorage.setItem(USER_NAME, name);
  } catch (error) {
    console.log(error);
  }
};

export const getLocalStorage = () => {
  try {
    const isNameExist = localStorage.getItem(USER_NAME);
    if (!isNameExist) return false;

    console.log(isNameExist);
    return isNameExist;
  } catch (error) {
    console.log(error);
  }
};
