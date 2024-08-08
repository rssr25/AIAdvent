import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MessageFromDirector from './components/MessageFromDirector';
import CollaboratingInstitutions from './components/CollaboratingInstitutions';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MainContent />
      <CollaboratingInstitutions />
      <MessageFromDirector />
      <Footer />
    </div>
  );
}

export default App;
