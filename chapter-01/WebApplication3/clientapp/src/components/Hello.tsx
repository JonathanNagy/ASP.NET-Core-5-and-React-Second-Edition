import * as React from 'react';

interface HelloProps {
  name: string;
}

interface HelloState {
  nameInput: string;
  name: string;
  seconds: number;
}

class Hello extends React.Component<HelloProps, HelloState> {
  interval: number = 0;

  constructor(props: HelloProps) {        
    super(props);    
    this.state = { name: props.name, nameInput: '', seconds: 0 }
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

  handleSubmit(e: any) {
    e.preventDefault();
    this.setState(state => ({
      name: state.nameInput,
      nameInput: '',
      seconds: 0
    }));
  }
  
  handleChange(e: any) {
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
    return (
      <div className="Hello">
        <h1>React?</h1>
        <div>
              Hello {this.state.name}!
        </div>
        <div>
          Running for {this.state.seconds} seconds!
          </div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}
            value={this.state.nameInput} />
          <button>
            Say Hi
          </button>
        </form>
      </div>
    );
  }
}

export default Hello;
