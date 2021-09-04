import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom"
import './App.css';
import { Suspense } from 'react';
import Photo from './features/photo/pages';
import Header from './components/header';

function App() {
  return (
    <div className="photo-app">
      {/* Dùng suspense với component lazy load */}
      <Suspense fallback={<div>
        Loading...
      </div>}>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route exact path="/photos" component={Photo}/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
