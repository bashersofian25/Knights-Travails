import { createHashTable } from "./hashTable.mjs";
import { createGraphNode } from "./graphNode.mjs";


export const CreateBoardGraph = () => {
    const _table = createHashTable();
    for(let i = 0; i<8; i++){
        for(let j = 0; j<8; j++) {
            _table.set(`${i}${j}`, createGraphNode([i, j]));
        }
    }

    const findSquare = (coordinates) => {
        return _table.get(`${coordinates[0]}${coordinates[1]}`);
    };

    const moveKnight = (source, destination) => {
        const startSquare = findSquare(source);
        const arr = [startSquare];
        while (arr.length > 0) {
            const visitedNode = arr.pop();
            console.log(visitedNode.coordinate);
            if(findSquare(visitedNode.coordinate) === findSquare(destination)){
                const destinationNode = findSquare(destination);
                destinationNode.marked = true;
                return destinationNode;
            }
            visitedNode.marked = true;
            for(let i = 0; i<visitedNode.nextNodesCoordinates.length; i++){
                if(visitedNode.nextNodesCoordinates[i] !== undefined){
                    arr.unshift(findSquare(visitedNode.nextNodesCoordinates[i]));

                }
            }
        }
    };

    return {findSquare, moveKnight};
};