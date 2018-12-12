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
        return this.content.translate("descriptions.color.primary")
    }

    primaryColorOptions(style) {
        let cat = "color.";

        // Using a switch statement to make it easier to add rose and orange in the future
        switch(style) {
            case 'white':
                return [
                    ["waterWhite", this.message( cat + "waterWhite")],
                    ["straw", this.message( cat + "straw" )],
                    ["yellow", this.message( cat + "yellow" )],
                    ["gold", this.message( cat + "gold" )]
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

    secondaryColorLabel() {
        return this.content.translate("descriptions.color.secondary")
    }


    secondaryColorOptions(style) {
        let cat = "color.";

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
                    ["orange", this.message( cat + "orange" )],
                    ["blue", this.message( cat + "blue" )],
                    ["ruby", this.message( cat + "ruby" )],
                    ["garnet", this.message( cat + "garnet" )],
                    ["brown", this.message( cat + "brown" )]
                ]
        }
    }
}

export default WineQualities;
