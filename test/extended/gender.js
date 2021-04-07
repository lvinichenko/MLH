import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';

describe('Gender', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-041 Button he is enable ', function () {
        $$(sel.radioButtons)[gender.he].click();
        let heEnable = $$(sel.radioButtons)[gender.he].isEnabled();
        expect(heEnable).toEqual(true);
    });

    // it('TC-042 Button she is enable ', function () {
    //     $$(sel.radioButtons)[gender.she].click();
    //     let sheEnable = $(sel.radioButtons)[gender.she].isEnabled();
    //     expect(sheEnable).toEqual(true);
    // });
    //
    // it('TC-043 Button it is enable ', function () {
    //     $$(sel.radioButtons)[gender.it].click();
    //     let itEnable = $(sel.radioButtons)[gender.she].isEnabled();
    //     expect(itEnable).toEqual(true);
    // });

    // it('TC-044.a User can choose only one button at the time: he', function () {
    //     $$(sel.radioButtons)[gender.he].click();
    //     browser.pause(3000);
    //     $$(sel.radioButtons)[gender.she].click();
    //     let radioButtonIsGray = $$(sel.radioButtons)[gender.it].isEnabled();
    //     browser.pause(3000)
    //     expect(radioButtonIsGray).toEqual(true);
    // });

    it('TC-047 Button it is enable ', function () {
        $$(sel.radioSelections)[0].click();
        $$(sel.radioSelections)[1].click();
        let radio = $$(sel.radioSelections).isSelected();
        expect(radio).toEqual(true);

    });



});