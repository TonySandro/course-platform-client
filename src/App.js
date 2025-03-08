import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services'; 
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';
import InitialNavBar from './components/InitialNavBar/InitialNavBar';
import Catalog from './pages/Catalog/Home';
import CourseDetail from './pages/CourseDetail/Home';
import CoursePlayer from './pages/CoursePlayer/Home';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  
  return (
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          {/* {!isAuthenticated && <Navbar />}
          {isAuthenticated && <InitialNavBar />} */}
          {/* <Navbar /> */}
          <Switch>
            <Route path='/coursedetail' component={CourseDetail} />
            <Route path='/courseplayer' component={CoursePlayer} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/mentoria' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/' component={Catalog} />
          </Switch>
          {/* <Footer /> */}
      </Router>    
  );
}

export default App;
