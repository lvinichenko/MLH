import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import inputValues4 from '../../helpers/methods';

describe('Age Field suit', function () {

    beforeEach('Open App', function () {
        browser.url('');
    });

    beforeEach(  () => {
        browser.refresh();
    });

    it ('TC-054 Age Field placeholder = "Hero\'s age"', function () {
        let placeholder = $(sel.age).getAttribute('placeholder');
        expect(placeholder).toEqual(exp.agePlaceholder);
    });

    describe('Positive cases', function () {

        it ('TC-066 Age input field doesn\'t accept letters', function () {
            $(sel.age).setValue('abc');
            // browser.pause(1000);
            // let error = $(sel.errorMessage).isDisplayed();

            let error = $(sel.errorMessage).waitForDisplayed(2000);
            expect(error).toEqual(true);
        });

        /*

        it('TC-056 Age = 1', function () {
            inputValues4(name.default, gender.she, age.min, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

        it('TC-057 Age = 999999999999', function () {
            inputValues4(name.default, gender.she, age.max, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(true);
        });

    });

    describe('Negative cases', function () {

        it('TC-068 Age = 0', function () {
            inputValues4(name.default, gender.she, age.zero, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

        it('TC-065 Age = 1000000000000', function () {
            inputValues4(name.default, gender.she, age.unreal, story.comedy);
            let submitBtn = $(sel.submit).isEnabled();
            expect(submitBtn).toEqual(false);
        });

         */

    });

});
