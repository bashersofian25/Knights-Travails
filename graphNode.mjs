export const createGraphNode = (coordinate) => {
    let nextNodesCoordinates = [
        [coordinate[0] + 2, coordinate[1] + 1],
        [coordinate[0] + 2, coordinate[1] - 1],
        [coordinate[0] - 2, coordinate[1] + 1],
        [coordinate[0] - 2, coordinate[1] - 1],
        [coordinate[0] + 1, coordinate[1] + 2],
        [coordinate[0] + 1, coordinate[1] - 2],
        [coordinate[0] - 1, coordinate[1] + 2],
        [coordinate[0] - 1, coordinate[1] - 2]
    ];
    nextNodesCoordinates = nextNodesCoordinates.filter((coord) => {return (coord[0]>=0 && coord[0]<=7 && coord[1]>=0 && coord[1]<=7);});

    
    return {coordinate, nextNodesCoordinates};
};