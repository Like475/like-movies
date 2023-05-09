import { Component } from 'react';
import Search from './Header/Search';

export default class Header extends Component {
    render() {
        return (
            <header className='h-16 bg-zinc-950'>
                <div className='mx-auto flex h-full max-w-screen-xl items-center justify-between px-4'>
                    <span className='text-3xl font-bold hover:text-lime-400'>
                        Like Movies
                    </span>
                    <Search search={this.props.search} />
                </div>
            </header>
        );
    }
}
