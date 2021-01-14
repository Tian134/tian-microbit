let speed = 255
let turnspeed = 0
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
        } else {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, turnspeed)
        }
    } else {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, turnspeed)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        } else {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
