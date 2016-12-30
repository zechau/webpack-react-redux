import { connect } from 'react-redux';
import { addTodo } from '../actions';
import ComAddTodo from '../components/AddTodo';

const mapStateToProps = () => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (val) => {
            dispatch(addTodo(val));
        }
    };
};


const AddTodo = connect(
    mapStateToProps,
    mapDispatchToProps
)(ComAddTodo);

export default AddTodo;
