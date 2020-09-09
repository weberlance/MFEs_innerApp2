import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { feature1ActionRequest } from '../../store/actions/Feature1';

class Page extends React.Component {
  componentDidMount() {
    const { feature1ActionRequest } = this.props;
    feature1ActionRequest();
  }

  render(){
    const { ReducerExample } = this.props;

    return (
      <div>
        <p>Page of inner app 2</p>
        {ReducerExample.data ? (
          <p>api data: {ReducerExample.data.toString()}</p>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ ReducerExample }) => ({
  ReducerExample,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      feature1ActionRequest,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Page);
