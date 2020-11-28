// import PaintingsList from './components/PaintingsList';
// import ColorPicker from './components/ColorPicker';
// import ColorPickerModule from './components/ColorPickerModule';
// import Alert from './components/Alert';
import Box from './components/Box';
import Container from './components/Container';
// import Section from './components/Section';
// import paintings from './paintings.json';

// const colorPickerOptions = [
//   { label: 'red', color: '#f44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196f3' },
//   { label: 'grey', color: '#607d8b' },
//   { label: 'pink', color: '#e91e63' },
//   { label: 'indigo', color: '#3f51b5' },
// ];

function App() {
  return (
    <div>
      {/* <ColorPicker options={colorPickerOptions} /> */}
      {/* <ColorPickerModule options={colorPickerOptions} /> */}
      <Container>
        <Box type="small" bgColor="red" />
        <Box type="medium" classNames="big red" />
        <Box type="large" styles={{ color: '#fff' }} />
      </Container>
      {/* <Container>
        <Alert text="Warning" type="success" />
        <Alert text="Warning" type="warning" />
        <Alert text="Warning" type="error" />
      </Container> */}
      {/* <PaintingsList items={paintings} /> */}
      {/* <Section title="top of the week">
        <PaintingsList items={paintings} />
      </Section>
      <Section /> */}
    </div>
  );
}

export default App;
