import * as React from 'react';
export class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.interval = 0;
        this.state = { name: props.name, nameInput: '', seconds: 0 };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    tick() {
        this.setState(state => ({
            name: state.name,
            nameInput: state.nameInput,
            seconds: state.seconds + 1
        }));
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState(state => ({
            name: state.nameInput,
            nameInput: '',
            seconds: 0
        }));
    }
    handleChange(e) {
        this.setState({ nameInput: e.target.value });
        console.log('state changed', e.target.value);
    }
    componentDidMount() {
        console.log('componentDidMount');
        this.interval = window.setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
        window.clearInterval(this.interval);
    }
    render() {
        return (React.createElement("div", { className: "Hello" },
            React.createElement("div", null,
                "Hello ",
                this.state.name,
                "!"),
            React.createElement("div", null,
                "Running for ",
                this.state.seconds,
                " seconds!"),
            React.createElement("form", { onSubmit: this.handleSubmit },
                React.createElement("input", { type: "text", onChange: this.handleChange, value: this.state.nameInput }),
                React.createElement("button", null, "Say Hi"))));
    }
}
export default Hello;
//# sourceMappingURL=Hello.js.map