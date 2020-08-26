
// CONST Types = {
//     "red": "Bug",
//     "yellow": "Improvement",
//     "green": "Research",
//     "grey": ""
// }

const PRIORITIES = {
    "Critical": "red",
    "High": "yellow",
    "Normal": "green",
    "Low": "grey"
}

const mapPriorityToColor = priority => {
    return PRIORITIES[priority]
}

export default mapPriorityToColor;
