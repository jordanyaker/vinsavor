import React from 'react';
import SeeForm from './SeeForm';
import SelectElement from './SelectElement';
import Translate from '../globalize/Translate';
import WineQualities from '../model/WineQualities';
import handleSetStyle from '../handler/handleSetStyle';
import handleSetClarity from '../handler/handleSetClarity';
import handleSetConcentration from '../handler/handleSetConcentration';
import handleSetPrimaryColor from '../handler/handleSetPrimaryColor';

class VinSavor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clarity: '',
            concentration: '',
            style: '',
            primaryColor: ''
        };

        this.content = new Translate("en");

        this.handleStyle = handleSetStyle.bind(this);
        this.handleClarity = handleSetClarity.bind(this);
        this.handleConcentration = handleSetConcentration.bind(this);
        this.handlePrimaryColor = handleSetPrimaryColor.bind(this);
    }
    
    render() {
        let seeForm;
        let wineQualities = new WineQualities(this.content);

        if (this.state.style !== '') {
            seeForm = <SeeForm  style={this.state.style}
                                    clarity={this.state.clarity}
                                    handleClarity={this.handleClarity}
                                    concentration={this.state.concentration}
                                    handleConcentration={this.handleConcentration}
                                    primaryColor={this.state.primaryColor}
                                    handlePrimaryColor={this.handlePrimaryColor}
                                    wineQualities={wineQualities}
                                    />
        }

        return (
            <form>
                <h1>{this.content.translate("siteName")}</h1>
                <SelectElement label={wineQualities.styleLabel()}
                               value={this.state.style}
                               handler={this.handleStyle}
                               options={wineQualities.styleOptions()} />

                {seeForm}
            </form>
        );
    }
}

export default VinSavor;