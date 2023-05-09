import { Component } from 'react';

export default class Movie extends Component {
    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    render() {
        const placeholderSrc = `https://placekitten.com/${this.getRandomInt(
            250,
            350
        )}/${this.getRandomInt(350, 450)}`;
        return (
            <div className='flex flex-col justify-between rounded-3xl bg-zinc-900 hover:scale-105 hover:drop-shadow-2xl'>
                <img
                    src={
                        this.props.poster === 'N/A'
                            ? placeholderSrc
                            : this.props.poster
                    }
                    alt={this.props.title}
                    className='max-h-[28rem] w-full rounded-t-3xl object-cover'
                />
                <div className='h-24 overflow-hidden p-3.5'>
                    <span className='-mb-0.5 inline-block h-10 w-full truncate text-2xl font-bold'>
                        {this.props.title}
                    </span>
                    <div className='flex justify-between font-semibold'>
                        <span>{this.props.type}</span>
                        <span>{this.props.year}</span>
                    </div>
                </div>
            </div>
        );
    }
}
