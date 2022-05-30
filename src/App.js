import { useDispatch, useSelector } from 'react-redux'
import {add, sub} from './store/counterSlice'


function App() {

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)

  const handleAdd = () => {
    dispatch(add(1))
  }

  const handleSub = () => {
    dispatch(sub(1))
  }


  return (
    <div className="App">

      <div className="container">
        <div className="plus" onClick={handleAdd}>+</div>
        <div className="screen">{counter}</div>
        <div className="minus" onClick={handleSub}>-</div>
      </div>

    </div>
  );
}

export default App;
