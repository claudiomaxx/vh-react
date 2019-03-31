import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import Filters from './components/Filters';
import Jobs from './components/Jobs';
import Menu from './components/Menu';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>VH</h1>

                    <Menu />

                    <div className='ui grid container'>
                        <div className='four wide column'>
                            <Filters />
                        </div>
                        <div className='twelve wide column'>
                            <Jobs />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}
