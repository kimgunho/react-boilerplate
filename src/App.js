import classNames from 'classnames/bind';

import styles from './App.module.scss';

const cx = classNames.bind(styles);

function App() {
  return <div className={cx('app')}></div>;
}

export default App;
