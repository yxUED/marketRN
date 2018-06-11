/* @flow weak */
import { connect } from 'react-redux';
import AllRoutes from './routes';

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllRoutes);
