import { CreateBoardGraph } from "./BoardAsAgraph.mjs";


const board = CreateBoardGraph();
board.printArr(board.moveKnight([0, 0], [7,7]));
board.printArr(board.moveKnight([0, 0], [7,4]));