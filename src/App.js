import './App.css';
// import React from 'react';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';




function App(props) {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header></Header>
        <NavbarContainer ></NavbarContainer>
        <div className='wrapper-content'>
          {/* <Profile></Profile> */}
          <Routes>
            <Route path="/profile" element={<ProfileContainer />} >
              <Route path=":userId" element={<ProfileContainer />} />
            </Route>
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/music/" element={<Music />} />
            <Route path="/news/" element={<News />} />
            <Route path="/settings/" element={<Settings />} />
            <Route path="/users/" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
