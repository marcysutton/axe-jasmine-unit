/* global describe, it, expect, axe, document */

describe('axe', function () {
	'use strict';

	document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',
      '<button id="taco-button">' +
        'Coolest button ever' +
      '</button>' +
      '<fieldset id="broken"><input></fieldset>');

	it('should report that good HTML is good', function (done) {
		var n = document.getElementById('taco-button');
		axe.a11yCheck(n, {}, function (result) {
			expect(result.violations.length).toBe(0);
			done();
		});
	});

	it('should report that bad HTML is bad', function (done) {
		var n = document.getElementById('broken');
		axe.run(n, {}, function (error, result) {
			if (result.violations.length > 0) {
				console.log(JSON.stringify(result.violations, null, 4));
			}
			expect(result.violations.length).toBe(1);
			done();
		});
	});
});
