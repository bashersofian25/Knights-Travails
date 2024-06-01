import { CreateBoardGraph } from "./BoardAsAgraph.mjs";


const board = CreateBoardGraph();
console.log("found", board.moveKnight([0, 0], [1,1]));