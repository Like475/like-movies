import { Component } from 'react';

export default class Search extends Component {
    state = {
        title: 'matrix',
        type: 'all'
    };

    handleKey = event => {
        if (event.key === 'Enter') {
            this.props.search(this.state.title, this.state.type);
        }
    };

    handleChange = event => {
        this.setState(
            {
                [event.target.name]: event.target.value
            },
            () => {
                if (event.target.type === 'radio') {
                    this.props.search(this.state.title, this.state.type);
                }
            }
        );
    };

    render() {
        return (
            <div className='flex items-stretch justify-center'>
                <ul className='mr-3 inline-flex'>
                    <li>
                        <input
                            type='radio'
                            name='type'
                            value='movies'
                            id='movies'
                            onChange={this.handleChange}
                            checked={
                                this.state.type === 'movies' ? true : false
                            }
                            className='peer appearance-none'
                        />
                        <label
                            htmlFor='movies'
                            className='type-item rounded-l-lg'
                        >
                            Movies
                        </label>
                    </li>
                    <li>
                        <input
                            type='radio'
                            name='type'
                            value='series'
                            id='series'
                            onChange={this.handleChange}
                            checked={
                                this.state.type === 'series' ? true : false
                            }
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
                            onChange={this.handleChange}
                            checked={this.state.type === 'all' ? true : false}
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
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKey}
                    className='mr-3 w-52 rounded-xl border-2 border-zinc-800 bg-zinc-900 px-4 hover:bg-zinc-800 focus:bg-zinc-800 focus:outline-none'
                />
                <button
                    className='rounded-xl border-2 border-lime-400 bg-transparent px-2.5 font-semibold hover:bg-lime-400 hover:text-zinc-950'
                    onClick={() =>
                        this.props.search(this.state.title, this.state.type)
                    }
                >
                    Search
                </button>
            </div>
        );
    }
}
