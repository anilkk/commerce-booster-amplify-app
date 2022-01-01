import './App.css';
import { Herobanner } from './ui-components';
const heroBanner = {
  title: 'Herobanner',
  description: 'Herobanner description',
  buttonText: 'See more demo',
  image: 'https://images.unsplash.com/photo-1641035579146-1466b2541869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
};
function App() {
  return (
    <div className="App">
      <Herobanner heroBanner={heroBanner}/>
    </div>
  );
}

export default App;
