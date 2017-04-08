import * as React from 'react';
const PropTypes = React.PropTypes;

interface TestProps {
  isOn: boolean;
  onClick: (isOn: boolean) => void;
}

const styles = {
  light: {
    display: 'inline-block',
    width: 20,
    height: 20,
    borderRadius: 20,
    margin: '0 0 -5px 10px'
  },
  turnedOff: {
    backgroundColor: 'red'
  },
  turnedOn: {
    backgroundColor: 'green'
  }
};

export default class Test extends React.Component<TestProps, void> {
  static propTypes = {
    isOn: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  };

  constructor(props: TestProps) {
    super(props);
  }

  render() {
    const style = this.props.isOn ? styles.turnedOn : styles.turnedOff;
    const text = this.props.isOn ? 'Turn off' : 'Turn on';
    return (
      <div>
        <button onClick={() => this.props.onClick(!this.props.isOn)}>{text}</button>
        <span style={{ ...styles.light, ...style }} />
      </div>
    );
  }
}
