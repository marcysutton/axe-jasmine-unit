# Using aXe in Jasmine Unit Tests #

This example demonstrates how to use aXe with the Jasmine unit testing framework.

The unit test is in `spec/a11y.js`, and has two test cases: One that shows the
expected results from HTML with no errors, and one that shows the expected
result from HTML with a single error.

## To configure the example ##

* Node must be installed; please follow the directions at http://www.nodejs.org
  to install it.
* `npm install -g grunt-cli` to install the Grunt task runner (may need to be
  run with `sudo` on Unix or as Administrator on Windows)
* `npm install` to install dependencies

## To run the example ##

* `grunt jasmine` to run Jasmine

You should see output indicating that the tests ran successfully, with zero
failures. Optionally, you can console.log the aXe results set to see what failed.

## To modify the example ##

To run the example on your own HTML, such as widgets or controls, insert the
HTML into the document, retrieve the root element of your widget (with e.g.,
`document.getElementById()`), and pass that as the first argument into a call
to `axe.run`.

The third argument to the `axe.run` call should be the function to test
the results. The example is simply looking at the count of violations, but much
more detailed information is available if desired.  The [aXe documentation](https://github.com/dequelabs/axe-core/blob/master/doc/API.md)
should be consulted for more details on customizing and analyzing calls to
`axe.run`.
