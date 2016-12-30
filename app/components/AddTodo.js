import React, {PropTypes} from 'react';

const AddTodo = ({ onSubmit }) => {
    let input;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                onSubmit(input.value);
                input.value = '';
            }}>
            <input ref={node => {
                input = node;
            }} />
            <button type="submit">
              Add Todo
            </button>
          </form>
        </div>
  );
};

AddTodo.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default AddTodo;
