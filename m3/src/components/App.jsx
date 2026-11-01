import './App.css'
import Header from './Header.jsx' 
import MainContent from './MainContent.jsx'
import {useRunes} from '../hooks/UseRunes.jsx'

export default function App() {
    const {fetchState, refetch } = useRunes();
    
    return (
        <div className="app-container">
            <Header fetchState={fetchState} />
            <MainContent fetchState={fetchState} refetch={refetch} />
        </div>
    );
}

