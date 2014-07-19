/*
   jQuery-urlParams
    Constructs an object representing the URL parameters

  Copyright (c) 2014 Mara Kim

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/

jQuery.urlParam = (function() {
    var Param = {};
    var URLVariables = window.location.search.substring(1).split('&');
    for (var index in URLVariables) {
        var split = URLVariables[index].split('=');
        var key = split[0];
        split.shift();
        if(split.length) {
          var value = split.join('=');
        } else {
          var value = null;
        }
        if (Object.keys(Param).indexOf(key) == -1) {
            Param[key] = value;
        } else {
            if(jQuery.isArray(Param[key])) {
                Param[key].push(value);
            } else {
                Param[key] = [ Param[key], value];
            }
        }
    }
    return Param;
}());
