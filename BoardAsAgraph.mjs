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

    return {findSquare}
};