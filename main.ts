input.onButtonPressed(Button.A, function () {
    if (Rechner == 1) {
        if (RechnerAuswahl1Aktive == 1) {
            if (RechnerAuswahl1 > 0) {
                RechnerAuswahl1 += -1
            }
        } else {
            if (RechnerAuswahl2Aktive == 1) {
                if (RechnerAuswahl2 > 1) {
                    RechnerAuswahl2 += -1
                }
            } else {
                if (RechnerAuswahl3Aktive == 1) {
                    if (RechnerAuswahl3 > 0) {
                        RechnerAuswahl3 += -1
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Rechner == 1) {
        if (RechnerAuswahl1Aktive == 1) {
            RechnerZahl1 = RechnerAuswahl1
            RechnerAuswahl1Aktive = 0
            RechnerAuswahl2Aktive = 1
            RechnerAuswahl2 = 1
        } else {
            if (RechnerAuswahl2Aktive == 1) {
                RechnerZahl2 = RechnerAuswahl2
                RechnerAuswahl2Aktive = 0
                RechnerAuswahl3Aktive = 1
            } else {
                if (RechnerAuswahl3Aktive == 1) {
                    RechnerZahl3 = RechnerAuswahl3
                    RechnerAuswahl3Aktive = 0
                    basic.showLeds(`
                        . . . . .
                        . # # # .
                        . . . . .
                        . # # # .
                        . . . . .
                        `)
                    basic.pause(2000)
                    if (RechnerZahl2 == 1) {
                        basic.showNumber(RechnerZahl1 + RechnerZahl3)
                    } else {
                        if (RechnerZahl2 == 2) {
                            basic.showNumber(RechnerZahl1 - RechnerZahl3)
                        } else {
                            if (RechnerZahl2 == 3) {
                                basic.showNumber(RechnerZahl1 * RechnerZahl3)
                            } else {
                                if (RechnerZahl2 == 4) {
                                    basic.showNumber(RechnerZahl1 / RechnerZahl3)
                                }
                            }
                        }
                    }
                    RechnerAusgerechnet = 1
                } else {
                    if (RechnerAusgerechnet == 1) {
                        RechnerAusgerechnet = 0
                        RechnerAusrechnen = 0
                        RechnerAuswahl1 = 0
                        RechnerAuswahl1Aktive = 1
                        RechnerAuswahl2 = 0
                        RechnerAuswahl2Aktive = 0
                        RechnerAuswahl3 = 0
                        RechnerAuswahl3Aktive = 0
                        RechnerZahl1 = 0
                        RechnerZahl2 = 0
                        RechnerZahl3 = 0
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (Rechner == 1) {
        if (RechnerAuswahl1Aktive == 1) {
            RechnerAuswahl1 += 1
        } else {
            if (RechnerAuswahl2Aktive == 1) {
                if (RechnerAuswahl2 < 4) {
                    RechnerAuswahl2 += 1
                }
            } else {
                if (RechnerAuswahl3Aktive == 1) {
                    RechnerAuswahl3 += 1
                }
            }
        }
    }
})
let RechnerAusrechnen = 0
let RechnerAusgerechnet = 0
let RechnerZahl3 = 0
let RechnerZahl2 = 0
let RechnerZahl1 = 0
let RechnerAuswahl3 = 0
let RechnerAuswahl3Aktive = 0
let RechnerAuswahl2 = 0
let RechnerAuswahl2Aktive = 0
let RechnerAuswahl1 = 0
let RechnerAuswahl1Aktive = 0
let Rechner = 0
Rechner = 1
RechnerAuswahl1Aktive = 1
basic.forever(function () {
    if (Rechner == 1) {
        if (RechnerAuswahl2Aktive == 1) {
            if (RechnerAuswahl2 == 1) {
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    # # # # #
                    . . # . .
                    . . # . .
                    `)
            }
            if (RechnerAuswahl2 == 2) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
            }
            if (RechnerAuswahl2 == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
            }
            if (RechnerAuswahl2 == 4) {
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . . . . .
                    . . # . .
                    . . . . .
                    `)
            }
        }
    }
})
basic.forever(function () {
    if (Rechner == 1) {
        if (RechnerAuswahl1Aktive == 1) {
            basic.showNumber(RechnerAuswahl1)
        }
    }
})
basic.forever(function () {
    if (Rechner == 1) {
        if (RechnerAuswahl3Aktive == 1) {
            basic.showNumber(RechnerAuswahl3)
        }
    }
})
