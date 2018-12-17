import React, {Component} from 'react';
import SelectElement from './SelectElement';

class SeeForm extends Component {
    render() {
        let { clarity,
              concentration,
              handleClarity,
              handleConcentration,
              handlePrimaryColor,
              handleSecondaryColor,
              primaryColor,
              secondaryColor,
              wineQualities } = this.props;
        let clarityOptions = wineQualities.clarityOptions();
        let concentrationOptions = wineQualities.concentrationOptions();
        let primaryColorOptions = wineQualities.primaryColorOptions(this.props.style);
        let secondaryColorOptions = wineQualities.secondaryColorOptions(this.props.style);

        return (
            <div>
                <h2>Sight</h2>
                <div>
                    <SelectElement label={wineQualities.clarityLabel()}
                                value={clarity}
                                handler={handleClarity}
                                options={clarityOptions} />
                </div>

                <div>
                    <SelectElement label={wineQualities.concentrationLabel()}
                                value={concentration}
                                handler={handleConcentration}
                                options={concentrationOptions} />
                </div>

                <div>
                    <SelectElement label={wineQualities.primaryColorLabel()}
                                value={primaryColor}
                                handler={handlePrimaryColor}
                                options={primaryColorOptions} />
                </div>

                <div>
                    <SelectElement label={wineQualities.secondaryColorLabel()}
                                value={secondaryColor}
                                handler={handleSecondaryColor}
                                options={secondaryColorOptions} />
                </div>
            </div>
        );
    }
}

export default SeeForm;
