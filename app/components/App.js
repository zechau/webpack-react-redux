import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const List = ({children}) =>
    <div>
    	<h1>Todo demo</h1>
        { children }
        <footer>
            <Link to="/">home</Link>
            <Link to="/about">About</Link>
        </footer>
    </div>;

List.propTypes = {
    children: PropTypes.object
};

export default List;
