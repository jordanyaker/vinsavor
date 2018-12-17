import Translate from '../Translate';

describe ('An initialized Translate object', () => {
    let subject = new Translate('en');

    it('returns a labels for known words', () => {
        expect(subject.translate("siteName")).toBe("VinSavor");
    });
    
});
