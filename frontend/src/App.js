import { BrowserRouter, Route } from 'react-router-dom'
import Routes from './router/router'
import signin from './pages/auth/signin';
import login from './pages/auth/login';
import home from './pages/auth/home';
import addCard from './pages/words/adddeck.jsx';
// import finddeck from './pages/words/finddeck';
import viewcards from './pages/words/viewcards';
import DeckComponent from './components/Deck';

function App() {
  return (
    <BrowserRouter>
      <Route path={Routes.add} component={addCard} />
      <Route path={Routes.findDeck} component={DeckComponent} />
      <Route path={Routes.login} component={login} />
      <Route path={Routes.signin} component={signin} />
      <Route path={Routes.view} component={viewcards} />
      <Route path={Routes.home} component={home} exact />
    </BrowserRouter>
  );
}

export default App;
