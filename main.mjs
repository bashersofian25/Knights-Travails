import { CreateBoardGraph } from "./BoardAsAgraph.mjs";


const board = CreateBoardGraph();
board.printArr(board.moveKnight([0, 0], [7,7]));
board.printArr(board.moveKnight([0, 0], [7,4]));
board.printArr(board.moveKnight([2, 2], [1,4]));
board.printArr(board.moveKnight([2, 0], [5,4]));
board.printArr(board.moveKnight([6, 0], [6,4]));
board.printArr(board.moveKnight([2, 4], [4,4]));
board.printArr(board.moveKnight([5, 0], [7,4]));