import * as React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import TestContainer from '../containers/TestContainer';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <TestContainer />
    <Footer />
  </div>
);

export default App;