import { Component } from 'react';
import MoviesList from './Main/MoviesList';

export default class Main extends Component {
    render() {
        return (
            <main className='mx-auto w-full max-w-screen-xl p-5'>
                <MoviesList title={this.props.title} type={this.props.type} />
            </main>
        );
    }
}
