import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from '~/layouts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          {publicRoutes.map((router, index) => {
            const Page = router.component;
            return (
              <Route
                key={index}
                path={router.path}
                element={
                  <DefaultLayout>
                    <Page />
                  </DefaultLayout>
                }
              ></Route>
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
