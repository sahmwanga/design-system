import {BtnWrapper,BtnLabel} from './components/Buttons'

function App() {
  return (
   <BtnWrapper>
      <div><BtnLabel>Label</BtnLabel></div>
      <div style={{borderLeft:'1px solid white'}}>2</div>
   </BtnWrapper>
  );
}

export default App;
