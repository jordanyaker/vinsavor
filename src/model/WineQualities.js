import Translate from '../globalize/Translate';

class WineQualities {
    constructor(content) {
        this.content = content;
    }

    message(key) {
        return this.content.translate("descriptions." + key)
    }

    styleLabel() {
        return this.content.translate("descriptions.style.label")
    }
    
    styleOptions() {
        let cat = "style.";

        return [
            ["red", this.message( cat + "red" )],
            ["white", this.message( cat + "white" )]
        ]
    };


    clarityLabel() {
        return this.content.translate("descriptions.clarity.label")
    }
    
    clarityOptions() {
        let cat = "clarity.";

        return [
            ["clear", this.message( cat + "clear" )],
            ["hazy", this.message( cat + "hazy" )],
            ["turbid", this.message( cat + "turbid" )]
        ]
    };

    concentrationLabel() {
        return this.content.translate("descriptions.concentration.label")
    }

    concentrationOptions() {
        let cat = "concentration.";

        return [
            ["pale", this.message( cat + "pale" )],
            ["medium", this.message( cat + "medium" )],
            ["deep", this.message( cat + "deep" )]
        ]
    }

    primaryColorLabel() {
        return this.content.translate("descriptions.primaryColor.label")
    }

    primaryColorOptions(style) {
        let cat = "primaryColor.";

        // Using a switch statement to make it easier to add rose and orange in the future
        switch(style) {
            case 'white':
                return [
                    ["silver", this.message( cat + "silver" )],
                    ["green", this.message( cat + "green" )],
                    ["copper", this.message( cat + "copper" )]
                ]
            break;
            default:
                return [
                    ["purple", this.message( cat + "purple" )],
                    ["ruby", this.message( cat + "ruby" )],
                    ["red", this.message( cat + "red" )],
                    ["garnet", this.message( cat + "garnet" )]
                ]
        }
    }
}

export default WineQualities;
