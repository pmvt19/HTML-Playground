import copy
"""list = [[9],[4],6,7,3,6,7,3]
newList = list[:]

print(list)
list.append(4)
print(list)
print(newList)"""
initBoard = "020000800050000040000891200000409030700002000210008064008000407342680900190050003"
board = [];


#Creates the 2D array for the board
def createBoard():
    temp = 0;
    for i in range(0,9):
        empArray = [];
        board.append(empArray)
        for j in range (0,9):
            board[i].append(initBoard[temp]);
            temp = temp + 1;

def isSameBoard(gameBoard):
    for i in range(9):
        for j in range(9):
            print(i, end = " ")
            print(",", end = " ")
            print(j)
            print(board[i][j], end = " ")
            print("   " , end = " ")
            print(gameBoard[i][j])
            if(board[i][j] != gameBoard[i][j]):
                return False
    return True
def printBoard(array):
    for i in range(9):
        for j in range(9):
            print(array[i][j], end = "")
        print("")
createBoard()
#printBoard(board)
newBoard = copy.deepcopy(board)

print(id(board))
print(id(newBoard))
printBoard(newBoard)
print("")
board[8][8] = "5"
newBoard[0][1] = "6"
printBoard(board)
print("")
printBoard(newBoard)
print(isSameBoard(newBoard))
