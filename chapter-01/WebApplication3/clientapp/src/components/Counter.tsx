import { Component } from 'react';

export class CounterState {
  currentCount: number = 0;
}

export class Counter extends Component<any,CounterState> {
  static displayName = Counter.name;

  constructor(props: any) {
    super(props);
    this.state = new CounterState();
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}
