import './styles/main.scss';
import template from './templates/main.hbs';
import data from './data/data.json';
import { setLocalStorage } from './utils/utils';
import { getLocalStorage } from './utils/utils';

let tmpUserNameState = ';';

window.onload = () => {
  //

  const container = document.getElementById('container');

  const isName = getLocalStorage();

  try {
    const test = localStorage.getItem(test);
    JSON.parse(test);
  } catch (error) {
    console.log(error);
  }

  if (isName) {
    const newData = Object.assign({}, data, { name: isName });
    container.innerHTML = template(newData);
  } else {
    container.innerHTML = template(data);
  }

  const nameInput = document.getElementById('nameInput');
  const saveUser = document.getElementById('saveUser');

  nameInput.addEventListener('input', e => {
    tmpUserNameState = e.target.value;
  });

  saveUser.addEventListener('click', () => {
    setLocalStorage(tmpUserNameState);

    const newData = Object.assign({}, data, { name: tmpUserNameState });

    container.innerHTML = template(newData);
  });
};
