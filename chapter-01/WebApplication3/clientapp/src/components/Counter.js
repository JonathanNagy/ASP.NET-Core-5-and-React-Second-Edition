import * as React from 'react';
import { Component } from 'react';
export class CounterState {
    constructor() {
        this.currentCount = 0;
    }
}
export class Counter extends Component {
    constructor(props) {
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
        return (React.createElement("div", null,
            React.createElement("h1", null, "Counter"),
            React.createElement("p", null, "This is a simple example of a React component."),
            React.createElement("p", { "aria-live": "polite" },
                "Current count: ",
                React.createElement("strong", null, this.state.currentCount)),
            React.createElement("button", { className: "btn btn-primary", onClick: this.incrementCounter }, "Increment")));
    }
}
Counter.displayName = Counter.name;
//# sourceMappingURL=Counter.js.map