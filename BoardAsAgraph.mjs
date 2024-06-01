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
        const path = [];
        while (arr.length > 0) {
            const visitedNode = arr.pop();
            visitedNode.marked = true;

            if(findSquare(visitedNode.coordinate) === findSquare(destination)){
                const destinationNode = findSquare(destination);
                destinationNode.marked = true;
                let currentNode = destinationNode;
                
                while (currentNode.cameFrom !== null){
                    path.unshift(currentNode.coordinate);

                    currentNode = currentNode.cameFrom;
                }
                path.unshift(source);
                cleanAfterMove();
                return path;
            }
            for(let i = 0; i<visitedNode.nextNodesCoordinates.length; i++){
                if(visitedNode.nextNodesCoordinates[i] !== undefined){
                    if(findSquare(visitedNode.nextNodesCoordinates[i]).marked === false){
                        const node = findSquare(visitedNode.nextNodesCoordinates[i]);
                        node.cameFrom = visitedNode;
                        arr.unshift(node);
                    }
                }
            }
        }
        
    };

    const printArr = (arr) => {
        for (let i = 0; i<arr.length; i++){
            if(i !== arr.length-1){
                process.stdout.write(`[${arr[i]}] --> `);
            }else {
                console.log(`[${arr[i]}]`);
            }
            
        }
    };

    const cleanAfterMove = () => {
        const keys = _table.keys();
        for (let i = 0; i < keys.length; i++){
            const node = _table.get(keys[i]);
            node.marked = false;
            node.cameFrom = null;
        }
    };

    return {findSquare, moveKnight, printArr};
};