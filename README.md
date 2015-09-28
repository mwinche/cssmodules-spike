cssmodules-spike
================

This repository was meant to spike out how one might be
able to extract theme information into a separate CSS
file and make use of CSSModules.

###Installation

```bash
npm install
npm start
```

Should be running on port 8888 of `localhost`.

###Findings

It seems like this is a reasonable way of approaching
some of the problems with CSS. It eliminates the need
for BEM as BEM is mostly for scoping and CSS Modules
take care of that concern. It also uses upcoming
standards to handle variables making it more future
proof.

I believe this approach shows real promise.

The primary downsides are: due to the use of modules
you have to dynamically assign classes to elements,
which requires a technology like React or Angular
(and becomes much more difficult on the server
side) and source map support seems to be lacking
(which should improve over time).
