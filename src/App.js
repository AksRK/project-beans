import './App.css';
import IndexPage from './pages/IndexPage/IndexPage'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DesignConcept from "./pages/DesignConceptPage/DesignConcept";
import Auth from "./pages/AuthPage/Auth";
import NavigationLayout from "./layouts/NavigationLayout/NavigationLayout";
import Cases from "./pages/CasesPage/Cases";
import MiniСoursePage from "./pages/MiniСoursePage/MiniСoursePage";
import NameAndLogoPage from "./pages/ NameAndLogoPage/ NameAndLogoPage";

function App() {
  return (
      <BrowserRouter basename={'/project-beans/'}>
          <Routes>
              <Route path={'/'} element={<NavigationLayout/>}>
                  <Route index element={<IndexPage/>} />
                  <Route path={'/cases'} element={<Cases/>} />
                  <Route path={'/design-concept'} element={<DesignConcept/>} />
                  <Route path={'/mini-course'} element={<MiniСoursePage/>} />
                  <Route path={'/name-and-logo'} element={<NameAndLogoPage/>} />
                  <Route path={'/auth'} element={<Auth/>} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
