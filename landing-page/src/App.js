import GlobalStyled from './Global.styled';
import Navbar from './pages/Layout/Navbar/Navbar';
import { ApplicationWrapper } from './Global.styled';
import LogoBar from './pages/Layout/LogoBar/LogoBar';


function App() {
  return (
    <ApplicationWrapper>
      <GlobalStyled />
      <LogoBar />
      <Navbar />
    </ApplicationWrapper>
  );
}

export default App;
