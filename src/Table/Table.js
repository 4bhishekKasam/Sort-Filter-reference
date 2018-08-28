import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const list = this.props.movies.map((movie) => (
            <tr key={movie.Title}>
                <td>{movie.Title}</td>
                <td>{movie.Director}</td>
                <td>{movie.Genre}</td>
                <td>{movie.imdbRating}</td>
            </tr>
        ));

        return (
            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Director</th>
                            <th>Genre</th>
                            <th>Imdb Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default Table;
