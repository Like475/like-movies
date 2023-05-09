import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

export default class App extends Component {
    state = {
        title: 'matrix',
        type: 'all'
    };

    search = (newTitle, newType) => {
        this.setState({ title: newTitle, type: newType });
    };

    render() {
        return (
            <div className='app flex min-h-screen flex-col bg-zinc-800'>
                <Header search={this.search} />
                <Main title={this.state.title} type={this.state.type} />
                <Footer />
            </div>
        );
    }
}
