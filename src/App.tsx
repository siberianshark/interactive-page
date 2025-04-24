import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InfoBoards } from './components/info-components/Infoboards';
import { Puzzle } from './components/Puzzle';
import { ColorKaleidoscope } from './components/ColorKaleidoscope';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-400 dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="flex-1 p-4">
        <InfoBoards/>
      </main>
      <Puzzle/>
      <ColorKaleidoscope/>
      <Footer />
    </div>
  );
}

export default App;
