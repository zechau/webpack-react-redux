import React, { PropTypes } from 'react';

const List = ({children}) =>
    <div>
        { children }
    </div>;

List.propTypes = {
    children: PropTypes.object
};

export default List;
