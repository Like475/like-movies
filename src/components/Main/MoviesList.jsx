import { Component } from 'react';
import axios from 'axios';
import Movie from './MoviesList/Movie';
import Loader from './MoviesList/Loader';

const API_KEY = import.meta.env.VITE_API_KEY;

export default class MoviesList extends Component {
    state = {
        movies: [],
        title: '',
        type: '',
        isFounded: true
    };

    getMovies = async (query, queryType) => {
        if (query !== this.state.title || queryType !== this.state.type) {
            try {
                const queryParams = {
                    apikey: API_KEY,
                    s: query
                };
                if (queryType === 'movies') {
                    queryParams.type = 'movie';
                } else if (queryType === 'series') {
                    queryParams.type = 'series';
                }
                const response = await axios.get('https://www.omdbapi.com', {
                    params: queryParams
                });
                if (response.data.Response === 'True') {
                    this.setState({
                        movies: response.data.Search,
                        isFounded: true
                    });
                } else {
                    this.setState({ movies: [], isFounded: false });
                }
            } catch (error) {
                throw error;
            }
            this.setState({ title: query, type: queryType });
        }
    };

    render() {
        this.getMovies(this.props.title, this.props.type);
        return this.state.isFounded ? (
            this.state.movies.length != 0 ? (
                <div className='grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4'>
                    {this.state.movies.map(movie => (
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
                <span className='text-3xl'>
                    We couldn't find any movies matching your query. Sorry...((
                </span>
            </div>
        );
    }
}
