(function(global) {
    'use strict';

    var JS_BASICS={};

    JS_BASICS.isNumberEven = function(i) {
	//a faire
        // i will be an integer.
        // Return true if it's even, and false if it isn't.
        if(i % 2 == 0)
        {
          return true;
        }
        else {return false ; }
    };

    JS_BASICS.getFileExtension = function(str) {
        // str will be a string, but it may not have a file extension.
        // Return the file extension (with no period) if it has one, otherwise false
        var extension;
        var pos = str.lastIndexOf('.');
        var extension = str.substr(pos+1); // sous_chaine
        if(pos != -1)
          return extension;
        return false;

    };

    JS_BASICS.longestString = function(arr) {
        // arr will be an array.
        // Return the longest string in the array
        var length_Max = -1;
        var mot_max;
        var length_cour;
        for (var i = 0; i < arr.length; i++) {
          if (typeof arr[i] != "string") continue;
          length_cour = arr[i].length;
          if (length_cour > length_Max) {
            length_Max = length_cour;
            mot_max = arr[i];
          }
        }

        if(length_Max != -1)
          return mot_max;
        return "lol";
    };

    JS_BASICS.reverseString = function(str) {
        // str will be an string
        // Return a new string who's characters are in the opposite order to str's.
        return str.split("").reverse().join("");
    };

    JS_BASICS.isPalindrome = function(str) {
        // str will be an string
        // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space or punctuation.
        str = str.toUpperCase();
        str = str.replace(/ /g,"");
        var len = str.length;
        for ( var i = 0; i < Math.floor(len/2); i++ ) {
            if (str[i] !== str[len - 1 - i]) {
                return false;
            }
        }
        return true;

    };

    JS_BASICS.nestedSum = function(arr) {
        // arr will be an array, containing integers, strings and/or arrays like itself
        // Return the sum all the numbers you find, anywhere in the nest of arrays.
        var res = 0;
        for (var i = 0; i < arr.length; i++) {
          if(Array.isArray(arr[i]))
            res  += JS_BASICS.nestedSum(arr[i]);
          if(Number.isInteger(arr[i]))
            res = res + arr[i];
        }

        return res;
    };

    global.JS_BASICS = JS_BASICS;
}(this));
