import './styles/main.scss';
import foo from './foo';


const editDom = () => {
  const root = document.getElementById('root');
  root.innerHTML = `Hello ${foo()}`;
};

editDom();

