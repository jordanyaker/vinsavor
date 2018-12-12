import React from 'react';
import optionElements from './optionElements';

class SelectElement extends React.Component {
    render() {
        return (
            <label>
                {this.props.label}:<br />
                <select value={this.props.value} onChange={this.props.handler}>
                    <option value="">Select One</option>
                    {optionElements(this.props.options)}
                </select>
            </label>
        );
    }
}

export default SelectElement;
