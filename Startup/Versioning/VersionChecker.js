{
    if(!isVar(VARIABLE_SPICY_VERSION)) {
        setVar(VARIABLE_SPICY_VERSION, getVar('personalityVersion', 0.1));
    }

    let checkingVersion = 0.2;
    if(getVar(VARIABLE_SPICY_VERSION) <= checkingVersion) {
        /*Do update stuff

        setVar(VARIABLE_SPICY_VERSION, checkingVersion);*/
    }

    checkingVersion = 0.3;
    if(getVar(VARIABLE_SPICY_VERSION) <= checkingVersion) {
        /*Do update stuff

        setVar(VARIABLE_SPICY_VERSION, checkingVersion);*/
    }
}