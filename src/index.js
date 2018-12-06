import React from 'react';
import ReactDOM from 'react-dom';

class SightForm extends React.Component {
    render() {
        let primaryColorSelect;

        if (this.props.style === 'white') {
            primaryColorSelect = <select value={this.props.primaryColor} onChange={this.props.handlePrimaryColor}>
                <option value="silver">Silver</option>
                <option value="green">Green</option>
                <option value="copper">Copper</option>
            </select>
        } else if (this.props.style === 'red') {
            primaryColorSelect = <select value={this.props.primaryColor} onChange={this.props.handlePrimaryColor}>
                <option value="purple">Purple</option>
                <option value="ruby">Ruby</option>
                <option value="red">Red</option>
                <option value="garnet">Garnet</option>
            </select>
        }

        return (
            <div>
                <h2>Sight</h2>
                <h3>Clarity</h3>
                <select value={this.props.clarity} onChange={this.props.handleClarity}>
                    <option value="clear">Clear</option>
                    <option value="hazy">Hazy</option>
                    <option value="coconut">Turbid</option>
                </select>

                <h3>Concentration</h3>
                <select value={this.props.concentration} onChange={this.props.handleConcentration}>
                    <option value="pale">Pale</option>
                    <option value="medium">Medium</option>
                    <option value="deep">Deep</option>
                </select>

                <h3>Primary Color</h3>
                {primaryColorSelect}
            </div>
        );
    }
}

class VinSavor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clarity: 'clear',
            concentration: 'medium',
            style: '',
            primaryColor: ''
        };

        if (this.state.primaryColor === '') {
            if (this.state.style === 'white') {
                this.setState({primaryColor: 'silver'});
            } else if (this.state.style === 'red') {
                this.setState({primaryColor: 'purple'});
            }
        }

        this.handleStyle = this.handleStyle.bind(this);
        this.handleClarity = this.handleClarity.bind(this);
        this.handleConcentration = this.handleConcentration.bind(this);
        this.handlePrimaryColor = this.handlePrimaryColor.bind(this);
    }

    handleStyle(event) {
        this.setState({style: event.target.value});
    }

    handleClarity(event) {
        this.setState({clarity: event.target.value});
    }

    handleConcentration(event) {
        this.setState({concentration: event.target.value});
    }

    handlePrimaryColor(event) {
        this.setState({primaryColor: event.target.value});
    }
    render() {
        let sightForm;

        if (this.state.style != '') {
            sightForm = <SightForm  style={this.state.style}
                                    clarity={this.state.clarity}
                                    handleClarity={this.handleClarity}
                                    concentration={this.state.concentration}
                                    handleConcentration={this.handleConcentration}
                                    primaryColor={this.state.primaryColor}
                                    handlePrimaryColor={this.handlePrimaryColor}
                                    />
        }
        return (
            <form>
                <h1>VinSavor</h1>
                <h2>Style</h2>
                <select value={this.state.style} onChange={this.handleStyle}>
                    <option value="">Select your wine style</option>
                    <option value="white">White</option>
                    <option value="red">Red</option>
                </select>

                {sightForm}
            </form>
        );
    }
}

ReactDOM.render(<VinSavor />, document.getElementById("root"));
