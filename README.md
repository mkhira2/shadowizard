# What is this?

Get perfect shadows every time for the non-designer. As seen on [npm](https://www.npmjs.com/package/kenji_shadowizard)!

# Installation

`npm i shadowizard -- save`

Then...

```
import { shadowizard } from "shadowizard";

shadowizard({
    shadow_type: "soft",
    padding: "15px" or 15 or true
});
```
## Options

Shadowizard supports 2 configurations, both of which are optional:

* **shadow_type**:<br>
_hard / soft_ (Defaults to soft)<br>

* **padding**:<br>
_boolean_ (Default false - true converts to "10px"),<br>
_number_ (Converts to pixels),<br>
_string in pixels_ (eg "20px")

