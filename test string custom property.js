var getProp = gs.getProperty('custom.test.boolean');
if (getProp == ‘true’) {
    gs.debug("Yey, a boolean variable");
}
else {
    gs.debug("Nope, not true");
}
