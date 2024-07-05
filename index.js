function distanceFromHqInBlocks(someValue) {
    const hqlocation = 42;
    return Math.abs(someValue - hqlocation);
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feetPerBlock = 264;
    return (blocks * feetPerBlock)
}

function distanceTravelledInFeet(start, destination) {
    const blocksTravelled = Math.abs(destination - start);
    const feetPerBlock = 264;
    return (blocksTravelled * feetPerBlock)
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination)

    if (distance > 2500) {
        return 'cannot travel that far';
    }
    else if (distance > 2000) {
        return 25;
    }
    else if (distance > 400) {
        return ( distance - 400) * 0.02;
    }
    else {
        return 0;
    }
}