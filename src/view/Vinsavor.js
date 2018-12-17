import React, {Component} from 'react';
import SeeForm from './SeeForm';
import SelectElement from './SelectElement';
import Translate from '../globalize/Translate';
import WineQualities from '../model/WineQualities';
import handleSetStyle from '../handler/handleSetStyle';
import handleSetClarity from '../handler/handleSetClarity';
import handleSetConcentration from '../handler/handleSetConcentration';
import handleSetPrimaryColor from '../handler/handleSetPrimaryColor';
import handleSecondaryColor from '../handler/handleSecondaryColor';

class VinSavor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clarity: '',
            concentration: '',
            style: '',
            primaryColor: '',
            secondaryColor: ''
        };

        this.content = new Translate("en");

        this.handleStyle = handleSetStyle.bind(this);
        this.handleClarity = handleSetClarity.bind(this);
        this.handleConcentration = handleSetConcentration.bind(this);
        this.handlePrimaryColor = handleSetPrimaryColor.bind(this);
        this.handleSecondaryColor = handleSecondaryColor.bind(this);
    }
    
    renderSeeForm(wineQualities) {
        let {style, clarity, concentration, primaryColor, secondaryColor} = this.state;

        if (style !== '') {
            return <SeeForm style={style}
                            clarity={clarity}
                            handleClarity={this.handleClarity}
                            concentration={concentration}
                            handleConcentration={this.handleConcentration}
                            primaryColor={primaryColor}
                            secondaryColor={secondaryColor}
                            handlePrimaryColor={this.handlePrimaryColor}
                            handleSecondaryColor={this.handleSecondaryColor}
                            wineQualities={wineQualities}
                            />
        } else {
            return null;
        }
    }

    render() {
        let wineQualities = new WineQualities(this.content);
        let {style} = this.state;

        return (
            <form>
                <h1>{this.content.translate("siteName")}</h1>
                <SelectElement label={wineQualities.styleLabel()}
                               value={style}
                               handler={this.handleStyle}
                               options={wineQualities.styleOptions()} />

                {this.renderSeeForm(wineQualities)}
            </form>
        );
    }
}

export default VinSavor;