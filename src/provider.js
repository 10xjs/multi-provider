import React, { Component, PropTypes } from 'react';
import storeShape from 'react-redux/lib/utils/storeShape';
import wrapComponent from 'wrap-component';
import { Provider } from 'react-redux';

export default wrapComponent(Provider => {
  class MultiProvider extends Component {
    constructor(props, context) {
      super(props, context);
      this.store = props.store;
      this.stores = props.stores;
    }

    getChildContext() {
      const { stores } = this;
      stores.default = stores.default || this.store;
      return { stores };
    }

    render() {
      const store = this.store || this.stores.default;
      const { children } = this.props;
      return <Provider store={store} children={children}/>;
    }
  }
  MultiProvider.propTypes = {
    store: storeShape,
    stores: PropTypes.objectOf(storeShape),
    children: PropTypes.element.isRequired,
  };
  MultiProvider.defaultProps = {
    stores: {}
  };
  MultiProvider.childContextTypes = {
    stores: PropTypes.objectOf(storeShape.isRequired),
  };
  return MultiProvider;
})(Provider);
