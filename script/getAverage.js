export function getAverage(fiveDayProperty) {
    let averageProperty = 0;
    let sum = 0;
    for (let i = 0; i < fiveDayProperty.length; i++) {
        sum = sum + fiveDayProperty[i];
    }
    averageProperty = sum / fiveDayProperty.length;
    return averageProperty;
}