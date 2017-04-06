import * as React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import TestContainer from '../containers/TestContainer';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = ({ params }: any) => (
  <div>
    <AddTodo />
    <VisibleTodoList
      filter={params.filter || 'all'}
    />
    <TestContainer />
    <Footer />
  </div>
);

export default App;