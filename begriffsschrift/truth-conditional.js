/*

Frege's conditional logic

*/

// takes no arguments, always returns true
function logicalTrue(args) {
  return true;
}

// takes no arguments, always returns false
function logicalFalse(args) {
  return false;
}

/* takes an argument

argument/subject(name) + single-order function

*/

// domain
const germans = ['Frege', 'Ballach', 'Sane']

function isGerman(person, germans) {
  var germans = []
}

if (isGerman('Frege')) {
  return 'Frege is German';
}


/* Truth tables & truth-conditional functions

Truth table for negation
P	| ~P
T	| F
F	| T

*/

// if p is the case, then q must be the case
if (p) {
  q = true;
  return q;
}

// attaching inferential relations between some input P and output Q
if ('sunny outside') {
  return 'ill go out and take a walk'
}
