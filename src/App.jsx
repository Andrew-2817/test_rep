import './App.css';
import Comments from './Comments';
import Likes from './Likes';
import Title from './Title';
import HeaderName from './HeaderName';
import { Form } from './Form';
import Spin from './Spin';
import { useSelector } from 'react-redux';


function App() {
  const spin = useSelector((state) => state.appReducer.spin)
  console.log(spin);
  //    
  return (
      <div className="App">
      <div className="wrap">
        <Spin/>
        <HeaderName/>
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title/>
            <Likes/>
          </div>
          <Comments/>
        </div>
        <Form/>
      </div>
    </div>

    
  );
}

export default App;
