import { Card } from './components/Card'
import img from './assets/img.jpg'

import './styles/app.css';
import { Yandex } from './components/Yandex/Yandex';

function App() {

  return (
    <>
      <div className="cards-container">
        <Card
          title="Card title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonText="Some button text"
        >
          <img src={img} className="card-img-top" alt="Котёнки" />
        </Card>
        <Card
          title="Card without image"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          buttonText="Some text"
        />
      </div>

      <Yandex />
    </>
  )
}

export default App
