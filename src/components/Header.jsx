import Search from './Header/Search';

export default function Header({ processQuery }) {
    return (
        <header className='bg-zinc-950 md:h-16'>
            <div className='mx-auto flex h-full max-w-screen-xl flex-col items-center justify-between p-4 md:flex-row md:py-0'>
                <span className='mb-6 text-4xl font-bold hover:text-lime-400 md:mb-0 md:text-3xl'>
                    Like Movies
                </span>
                <Search processQuery={processQuery} />
            </div>
        </header>
    );
}
