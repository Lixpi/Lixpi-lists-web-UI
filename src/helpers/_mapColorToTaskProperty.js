
// CONST Types = {
//     'red': 'Bug',
//     'yellow': 'Improvement',
//     'green': 'Research',
//     'grey': '
// }

const PRIORITIES = {
    'critical': 'red',
    'high': 'yellow',
    'regular': 'green',
    'low': 'grey'
}

const mapPriorityToColor = priority => {
    return PRIORITIES[priority]
}

export default mapPriorityToColor;
