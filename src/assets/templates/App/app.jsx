import { Navbar } from '../../components/nav-bar/nav-bar';
import { Container } from './app-style';
import { MyRoutes } from '../../routes/routes';
import { GlobalStyle } from '../../style/global-styles';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

export const App = function () {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Navbar />
          <MyRoutes />
          <GlobalStyle />
          <ToastContainer autoClose={3000} className="toast-container" />
        </Container>
      </BrowserRouter>
    </>
  );
};
