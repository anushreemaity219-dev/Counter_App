import Counter from './components/Counter';
import './App.css'
function App() {
  return (
    <div className='app'>
      <Counter title="Counter One" initialValue={0} step={1} />
      <Counter title="Counter Two " initialValue={25} step={1} />
      <Counter title="Step Counter(+5)" initialValue={10} step={5}/>
      </div>
  );
  
}

export default App;
