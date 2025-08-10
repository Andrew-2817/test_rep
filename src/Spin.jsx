import { useSelector } from 'react-redux';
import {Oval} from 'react-loader-spinner';

const Spin = (props) => {
  const spinner = useSelector(state => state.appReducer.spin);

  return (
    <div className='loader-styles'>
      <Oval 
        type="TailSpin"
        color="#00BFFF"
        height={100}
        width={100}
        visible={spinner}
      />
    </div>
  )
}

export default Spin;