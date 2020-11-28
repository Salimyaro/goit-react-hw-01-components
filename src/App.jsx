import PaintingsList from './components/PaintingsList';
import Section from './components/Section';
import paintings from './paintings.json';

function App() {
  return (
    <div>
      <Section title="top of the week">
        <PaintingsList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}

export default App;
