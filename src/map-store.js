import { PropTypes } from 'react';
import mapContext from 'map-context';
import storeShape from 'react-redux/lib/utils/storeShape';

export default function mapStore(storeContext) {
  return mapContext(
    { stores: PropTypes.objectOf(storeShape) },
    ({ stores }) => ({ store: stores[storeContext] }),
    { store: storeShape }
  );
}
