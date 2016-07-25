
const remote = require('electron').remote;

const Button = ReactBootstrap.Button;
const Glyphicon = ReactBootstrap.Glyphicon;


const titleBarColor = '#444444';

// main title bar style
const titleBarStyle = {
    display: 'inline-block',
    width: '100%',
    backgroundColor: titleBarColor
};

// dragable title bar section style
const titleDragBarStyle = {
    overflow: 'hidden',
    width: 'auto',
    height: '46px',
    marginTop: '0px',
    marginBottom: '0px',
    marginLeft: '8px',
    marginRight: '8px',
    backgroundColor: titleBarColor,
    WebkitAppRegion: 'drag'
};

// title bar buttons style
const titleButtonStyle = {
    float: 'right',
    margin: '8px',
    backgroundColor: titleBarColor
};




const AppTitleBar = React.createClass({
    getInitialState() {
        return {
            alertVisible: true,
            settingsVisible: false,
            windowMaximized: false
        };
    },

    render() {

        // window close button
        let closeButton = <div style={titleButtonStyle}>
                            <Button bsSize='small' onClick={this.closeApp}>
                              <Glyphicon glyph="remove" />
                            </Button>
                          </div>;

        // maximize button
        let maximizeButton = <div style={titleButtonStyle}>
                               <Button bsSize='small' onClick={this.maximizeButtonClicked}>
                                 <Glyphicon glyph="fullscreen" />
                               </Button>
                             </div>;

        // minimize button
        let minimizeButton = <div style={titleButtonStyle}>
                               <Button bsSize='small' onClick={this.minimizeButtonClicked}>
                                 <Glyphicon glyph="minus" />
                               </Button>
                             </div>;

        // draggable titlebar section
        let dragBar = <div style={titleDragBarStyle} />;




        return ( <div>
                   <div style={titleBarStyle}>
                     {closeButton}
                     {maximizeButton}
                     {minimizeButton}
                     {dragBar}
                   </div>
                 </div> );
    },

    closeApp() {
        window.close();
    },

    maximizeButtonClicked() {
        var window = remote.getCurrentWindow();
        if(this.state.windowMaximized) {
            window.unmaximize();
            this.state.windowMaximized = false;
        } else {
            window.maximize();
            this.state.windowMaximized = true;
        }
        console.log(' > maximize pressed');
    },

    minimizeButtonClicked() {
        var window = remote.getCurrentWindow();
        window.minimize();
        console.log(' > minimize pressed');
    }

});

ReactDOM.render(
    <AppTitleBar />,
    document.getElementById('app-titlebar')
);
