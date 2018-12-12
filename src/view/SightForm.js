import React from 'react';
import SelectElement from './SelectElement';

class SightForm extends React.Component {
    render() {
        let clarityOptions = this.props.wineQualities.clarityOptions();
        let concentrationOptions = this.props.wineQualities.concentrationOptions();
        let primaryColorOptions = this.props.wineQualities.primaryColorOptions(this.props.style);

        return (
            <div>
                <h2>Sight</h2>
                <div>
                    <SelectElement label={this.props.wineQualities.clarityLabel()}
                                value={this.props.clarity}
                                handler={this.props.handleClarity}
                                options={clarityOptions} />
                </div>

                <div>
                    <SelectElement label={this.props.wineQualities.concentrationLabel()}
                                value={this.props.concentration}
                                handler={this.props.handleConcentration}
                                options={concentrationOptions} />
                </div>

                <div>
                    <SelectElement label={this.props.wineQualities.primaryColorLabel()}
                                value={this.props.primaryColor}
                                handler={this.props.handlePrimaryColor}
                                options={primaryColorOptions} />
                </div>
            </div>
        );
    }
}

export default SightForm;
