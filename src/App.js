import Navbar from './components/Navbar';
import Map from './components/Map';
import Center from './components/Center';
import Oveview from './components/Oveview';
import History from './components/History';
import Places from './components/Places';

function App() {
  return (
    <Center>
      <Navbar />
      <Map />
      <Oveview />
      <History />
      <Places />
    </Center>
  );
}

export default App;
