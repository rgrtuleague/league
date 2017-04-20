/**
 * Created by Sergey on 19.04.2017.
 */
/*
Task

You will be given a 2D array of the maze and an array of directions.
    Your task is to follow the directions given.
    If you reach the end point before all your moves have gone, you should return Finish.
    If you hit any walls or go outside the maze border, you should return Dead.
    If you find yourself still in the maze after using all the moves, you should return Lost.
    The Maze array will look like

maze = [[1,1,1,1,1,1,1],
    [1,0,0,0,0,0,3],
    [1,0,1,0,1,0,1],
    [0,0,1,0,0,0,1],
    [1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1],
    [1,2,1,0,1,0,1]]
    ..with the following key

0 = Safe place to walk
1 = Wall
2 = Start Point
3 = Finish Point

direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
Rules

1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.
2. The start and finish positions will change for the final tests.
3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.
  */
function mazeRunner(maze, directions) {
    // сначала найдем начало (точку 2)
    for (var i=0;i<maze.length;i++) {
        for (var j=0;j<maze[i].length;j++) {
            if (maze[i][j] == 2) {
                var x = i; // номер строки
                var y = j; // номер столбца
                break;
            }
        }
    }
      for (i=0;i<directions.length;i++) {
        switch (directions[i]) {
            case 'N': x -= 1;
                if ( x<0 || maze[x][y] == 1 ) return 'Dead';
                if (maze[x][y] == 3) return 'Finish';
                break;
            case 'E': y += 1;
                if ( y == maze.length || maze[x][y] == 1 ) return 'Dead';
                if (maze[x][y] == 3) return 'Finish';
                break;
            case 'W': y -= 1;
                if ( y<0 || maze[x][y] == 1 ) return 'Dead';
                if (maze[x][y] == 3) return 'Finish';
                break;
            case 'S': x += 1;
                if (x == maze.length || maze[x][y] == 1) return 'Dead';
                if (maze[x][y] == 3) return 'Finish';
                break;
            default: break;
        }
    }
    return 'Lost';
}
console.log(mazeRunner([ [ 1, 1, 1, 1, 1, 1, 1, 1, 0, 1 ],
              [ 1, 3, 1, 0, 1, 0, 0, 0, 0, 1 ],
              [ 1, 0, 1, 0, 0, 0, 1, 1, 0, 1 ],
              [ 1, 0, 1, 1, 1, 1, 1, 0, 0, 1 ],
              [ 1, 0, 1, 0, 0, 0, 0, 0, 0, 1 ],
              [ 1, 0, 1, 0, 1, 0, 1, 0, 0, 1 ],
              [ 1, 0, 1, 0, 1, 0, 0, 0, 0, 0 ],
              [ 1, 0, 1, 0, 1, 0, 1, 1, 0, 1 ],
              [ 1, 0, 0, 0, 1, 0, 0, 0, 0, 1 ],
              [ 1, 1, 1, 0, 1, 1, 1, 1, 2, 1 ] ],
    [ 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S' ]));  // LOST














