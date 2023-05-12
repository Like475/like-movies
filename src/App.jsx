import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { useState } from 'react';

export default function App() {
    const [query, setQuery] = useState('matrix');
    const [queryType, setQueryType] = useState('all');

    function processQuery(newQuery, newQueryType) {
        setQuery(newQuery);
        setQueryType(newQueryType);
    }

    return (
        <div className='app flex min-h-screen flex-col bg-zinc-800'>
            <Header processQuery={processQuery} />
            <Main query={query} queryType={queryType} />
            <Footer />
        </div>
    );
}
