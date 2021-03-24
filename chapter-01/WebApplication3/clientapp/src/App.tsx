import { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Hello from './components/Hello';
import { Counter } from './components/Counter';
import { FetchData } from './components/FetchData';
import './App.css';

class App extends Component<any,any> {
  render() {
    return (
      <Layout>
        {/* Could use render rather than component to avoid mounting and unmounting the component on ever navigation. 
         However, I tried it and it still mounted and unmounted. I think you have to conver the component to a function
         to allow the render speed hack. */}
        <Route exact path='/' component={(props: any) => <Hello {...props} name="Jonathan" />} />
        <Route exact path='/counter' component={Counter} />
        <Route exact path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}

export default App;
