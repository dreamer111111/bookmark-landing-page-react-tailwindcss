import './index.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import TabGroup from './features/features-tabs/TabGroup';
import Download from './features/downloads/Download';
import Accordion from './features/faq/Accordion';
import NewsLetter from './features/newsletter/NewsLetter';
import Footer from './components/layout/Footer';

function App() {

  return (
    <main className="min-h-screen">
        <Navbar />
        <Hero />
        <TabGroup />
        <Download />
        <Accordion />
        <NewsLetter />
        <Footer />
    </main>
  )
}

export default App
