describe('MTR Datepicker: When the "datepicker" option is provided ', function () {
  var datepickerSelectorName = 'datepicker';
  var datepickerSelector = '#' + datepickerSelectorName;
  var datepicker;

  beforeEach(function () {
    setBaseFixtures();
  });

  function setBaseFixtures () {
    setFixtures('<div id="datepicker"></div>');
  }

  describe('when datepicker: true', function () {
    beforeEach(function () {
      datepicker = new MtrDatepicker({
        target: 'datepicker',
        datepicker: true
      });
    });

    it('should have input slider for the dates', function () {
      var datepickerElement = $(datepickerSelector);
      var expectedElement = datepickerSelector + '-input-dates.mtr-input-slider';

      expect(datepickerElement).toContainElement(expectedElement);
    });

    it('should have input slider for the months', function () {
      var datepickerElement = $(datepickerSelector);
      var expectedElement = datepickerSelector + '-input-months.mtr-input-slider';

      expect(datepickerElement).toContainElement(expectedElement);
    });

    it('should have input slider for the years', function () {
      var datepickerElement = $(datepickerSelector);
      var expectedElement = '#' + datepickerSelectorName + '-input-years.mtr-input-slider';

      expect(datepickerElement).toContainElement(expectedElement);
    });

    // TODO: Add some more tests to check the interactions with the date fields
  });

  describe('when datepicker: false', function () {
    beforeEach(function () {
      // eslint-disable-next-line no-unused-vars
      datepicker = new MtrDatepicker({
        target: 'datepicker',
        datepicker: false
      });
    });

    it('should not have input slider for the dates', function () {
      var datepickerElement = $(datepickerSelector);
      var expectedElement = datepickerSelector + '-input-dates.mtr-input-slider';

      expect(datepickerElement).not.toContainElement(expectedElement);
    });

    it('should not  have input slider for the months', function () {
      var datepickerElement = $(datepickerSelector);
      var expectedElement = datepickerSelector + '-input-months.mtr-input-slider';

      expect(datepickerElement).not.toContainElement(expectedElement);
    });

    it('should not  have input slider for the years', function () {
      var datepickerElement = $(datepickerSelector);
      var expectedElement = '#' + datepickerSelectorName + '-input-years.mtr-input-slider';

      expect(datepickerElement).not.toContainElement(expectedElement);
    });
  });
});
