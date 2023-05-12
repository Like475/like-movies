import { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './MoviesList/Movie';
import Loader from './MoviesList/Loader';

export default function MoviesList(props) {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');
    const [queryType, setQueryType] = useState('');
    const [isFounded, setIsFounded] = useState(true);

    useEffect(() => {
        async function getMovies(newQuery, newQueryType) {
            if (newQuery !== query || newQueryType !== queryType) {
                setMovies('');
                try {
                    const queryParams = {
                        apikey: 'd0acc7c0',
                        s: newQuery
                    };
                    if (newQueryType === 'movies') {
                        queryParams.type = 'movie';
                    } else if (newQueryType === 'series') {
                        queryParams.type = 'series';
                    }
                    const response = await axios.get(
                        'https://www.omdbapi.com',
                        { params: queryParams }
                    );
                    if (response.data.Response === 'True') {
                        setMovies(response.data.Search);
                        setIsFounded(true);
                    } else {
                        setMovies([]);
                        setIsFounded(false);
                    }
                    setQuery(newQuery);
                    setQueryType(newQueryType);
                } catch (error) {
                    setMovies([]);
                    setIsFounded(false);
                    throw error;
                }
            }
        }

        getMovies(props.query, props.queryType);
    });

    return isFounded ? (
        movies.length !== 0 ? (
            <div className='grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4'>
                {movies.map(movie => (
                    <Movie
                        key={movie.imdbID}
                        title={movie.Title}
                        year={movie.Year}
                        type={movie.Type}
                        poster={movie.Poster}
                    />
                ))}
            </div>
        ) : (
            <Loader />
        )
    ) : (
        <div className='mt-10 flex w-full justify-center'>
            <span className='text-xl md:text-3xl'>
                We couldn't find any movies matching your query. Sorry...((
            </span>
        </div>
    );
}
