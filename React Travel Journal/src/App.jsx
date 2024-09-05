import Card from '../components/Card'
import './App.css'
import data from './data.js'
import fuji from './assets/fuji.jpg'
function App() {
  const cardComponents = data.map((item, index) => (
    <Card 
    key={index} 
    title={item.title}
    location={item.location}
    startDate={item.startDate}
    endDate={item.endDate}
    description={item.description}
    imageUrl={fuji} 
    />
  ));
  return (
      <div>
      {cardComponents}
      </div>
  );
}

export default App
