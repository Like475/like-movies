import { useState } from 'react';

export default function Search({ processQuery }) {
    const [query, setQuery] = useState('matrix');
    const [queryType, setQueryType] = useState('all');

    function processQueryOnEnter(event) {
        if (event.key === 'Enter') {
            processQuery(query, queryType);
        }
    }

    // function bindTitleInput(e) {
    //     setQuery(e.target.value);
    // }

    function bindTypeInput(e) {
        processQuery(query, e.target.value);
        setQueryType(e.target.value);
    }

    return (
        <div className='flex w-full flex-col items-center justify-center space-y-3 md:w-auto md:flex-row md:space-x-3 md:space-y-0'>
            <ul className='inline-flex py-2'>
                <li>
                    <input
                        type='radio'
                        name='type'
                        value='movies'
                        id='movies'
                        onChange={bindTypeInput}
                        checked={queryType === 'movies' ? true : false}
                        className='peer appearance-none'
                    />
                    <label htmlFor='movies' className='type-item rounded-l-lg'>
                        Movies
                    </label>
                </li>
                <li>
                    <input
                        type='radio'
                        name='type'
                        value='series'
                        id='series'
                        onChange={bindTypeInput}
                        checked={queryType === 'series' ? true : false}
                        className='peer appearance-none'
                    />
                    <label htmlFor='series' className='type-item'>
                        Series
                    </label>
                </li>
                <li>
                    <input
                        type='radio'
                        name='type'
                        value='all'
                        id='all'
                        onChange={bindTypeInput}
                        checked={queryType === 'all' ? true : false}
                        className='peer appearance-none'
                    />
                    <label htmlFor='all' className='type-item rounded-r-lg'>
                        All
                    </label>
                </li>
            </ul>
            <input
                type='text'
                name='title'
                placeholder='Enter query'
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={processQueryOnEnter}
                className='w-full rounded-xl border-2 border-zinc-800 bg-zinc-900 px-4 py-2 hover:bg-zinc-800 focus:bg-zinc-800 focus:outline-none md:w-52 md:py-0'
            />
            <button
                className='w-full rounded-xl border-2 border-lime-400 bg-transparent py-2 font-semibold hover:bg-lime-400 hover:text-zinc-950 md:w-auto md:px-2.5 md:py-0'
                onClick={() => processQuery(query, queryType)}
            >
                Search
            </button>
        </div>
    );
}
