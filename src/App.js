import './App.css';
import BasePage from './components/BasePage/BasePage';
import 'antd/dist/antd.css';
import { hot } from 'react-hot-loader';

function App({ t}) {
  return (
    <div>
        <BasePage t={t}/>
    </div>
  );
}

export default hot(module)(App);
