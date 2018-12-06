import React from 'react';
import ReactDOM from 'react-dom';

class SightForm extends React.Component {
    clarityOptionList() {
        let list;

        list = new Map();
        list.set('clear', 'Clear');
        list.set('hazy', 'Hazy');
        list.set('turbid', 'Turbid');

        return list;
    }

    concentrationOptionList() {
        let list;

        list = new Map();
        list.set('pale', 'Pale');
        list.set('medium', 'Medium');
        list.set('deep', 'Deep');

        return list;
    }

    primaryColorOptionList() {
        let list;

        list = new Map();

        console.log(this.props);

        if (this.props.style === 'white') {
            list.set('silver', 'Silver');
            list.set('green', 'Green');
            list.set('copper', 'Copper');
        } else if (this.props.style === 'red') {
            list.set('purple', 'Purple');
            list.set('ruby', 'Ruby');
            list.set('red', 'Red');
            list.set('garnet', 'Garnet');    
        }

        return list;
    }

    render() {
        return (
            <div>
                <h2>Sight</h2>
                <div>
                    <SelectElement label="Clarity"
                                value={this.props.clarity}
                                handler={this.props.handleClarity}
                                options={this.clarityOptionList()} />
                </div>

                <div>
                    <SelectElement label="Concentration"
                                value={this.props.concentration}
                                handler={this.props.handleConcentration}
                                options={this.concentrationOptionList()} />
                </div>

                <div>
                    <SelectElement label="Primary Color"
                                value={this.props.primaryColor}
                                handler={this.props.handlePrimaryColor}
                                options={this.primaryColorOptionList()} />
                </div>
            </div>
        );
    }
}

class SelectElement extends React.Component {
    optionElements(options) {
        let resultList = [];
        
        options.forEach((value, key) => {
            resultList.push(<option key={key} value={key}>{value}</option>);
        });

        return resultList;
    }

    render() {
        return (
            <label>
                {this.props.label}:<br />
                <select value={this.props.value} onChange={this.props.handler}>
                    <option value="">Select One</option>
                    {this.optionElements(this.props.options)}
                </select>
            </label>
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

    styleOptionList() {
        let list;

        list = new Map();
        list.set('red', 'Red');
        list.set('white', 'White');

        return list;
    }

    render() {
        let sightForm;

        if (this.state.style !== '') {
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
                <h2>General Style</h2>
                <SelectElement label="Style"
                               value={this.state.style}
                               handler={this.handleStyle}
                               options={this.styleOptionList()} />

                {sightForm}
            </form>
        );
    }
}

ReactDOM.render(<VinSavor />, document.getElementById("root"));
