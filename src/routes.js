import Home from "./Pages/Home";
import { GlobalProvider } from "./context/GlobalContext";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function Routes() {
  return (
   <Router>
    <Switch>
      <GlobalProvider>
        <Route path={['/', '/home']} exact component={Home} />
      </GlobalProvider>
    </Switch>
   </Router>
  );
}

export default Routes;
