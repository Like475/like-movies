import MoviesList from './Main/MoviesList';

export default function Main({ query, queryType }) {
    return (
        <main className='mx-auto w-full max-w-screen-xl p-5'>
            <MoviesList query={query} queryType={queryType} />
        </main>
    );
}
