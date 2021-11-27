import logo from './logo.svg';
import './App.css';
import BasePage from './components/BasePage';
import 'antd/dist/antd.css';

function App({ t}) {
  return (
    <div>
        <BasePage t={t}/>
    </div>
  );
}

export default App;
