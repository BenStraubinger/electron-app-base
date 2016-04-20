
var Button = ReactBootstrap.Button;
var Glyphicon = ReactBootstrap.Glyphicon;

var Alert = ReactBootstrap.Alert;


const StartupInfoBox = React.createClass({
    getInitialState() {
        return {
            alertClosed: false
        };
    },

    render() {
        if(this.state.alertClosed === false) {
            return (
                <Alert bsStyle="success">
                  <div style={{display: 'inline-block', width: '100%'}}>
                      <div style={{float: 'left'}}>
                          <div><strong>ReactJS and React-Bootstrap loaded</strong></div>
                          <div>ReactJS and React-Bootstrap were loaded successfully.</div>
                      </div>
                      <div style={{float: 'right'}}>
                        <Button bsSize="xsmall" onClick={this.dismissAlert}>
                            <Glyphicon glyph="remove" />
                        </Button>
                      </div>
                  </div>
                </Alert>
            );
        }
        return (
            <div style={{"height": "0px"}} />
        );
    },

    dismissAlert() {
        this.setState({alertClosed: true});
    }
});

ReactDOM.render(
    <StartupInfoBox />,
    document.getElementById('startup-info')
);
