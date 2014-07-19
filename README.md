# jquery-urlParam

**jQuery-urlParam** - jQuery plugin that constructs an object representing the current URL parameters


## Usage

URL parameters can be accessed with

    $.urlParam

Arguments can be accessed as keys of the parameter object.
For example, the arguments to this URL:

    http://www.example.com/?item=foo&item=bar&flag

Would generate the following object:

    {
      item: [ "foo", "bar" ],
      flag: null
    }
