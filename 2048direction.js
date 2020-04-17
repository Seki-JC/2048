function left(a) {
    var index = 0;
    var b = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    var c = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    for (var i = 0; i < 4; i++) {
        index = 0;
        for (var j = 0; j < 4; j++) {
            if (a[i][j] != 0) {
                b[i][index] = a[i][j];
                index++;
            }
        }
        for (j = 0; j < 4; j++) {
            if ((b[i][j] != 0) & (b[i][j] == b[i][j + 1])) {
                b[i][j] = b[i][j] + b[i][j + 1];
                b[i][j + 1] = 0;
            }
        }
        index = 0;
        for (j = 0; j < 4; j++) {
            if (b[i][j] != 0) {
                c[i][index] = b[i][j];
                index++;
            }
        }
    }
    return c;
}

function right(a) {
    var index = 0;
    var b = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    var c = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    for (var i = 0; i < 4; i++) {
        index = 3;
        for (var j = 3; j >= 0; j--) {
            if (a[i][j] != 0) {
                b[i][index] = a[i][j];
                index--;
            }
        }
        for (var j = 3; j >= 0; j--) {
            if ((b[i][j] != 0) & (b[i][j] == b[i][j - 1])) {
                b[i][j] = b[i][j] + b[i][j - 1];
                b[i][j - 1] = 0;
            }
        }
        index = 3;
        for (var j = 3; j >= 0; j--) {
            if (b[i][j] != 0) {
                c[i][index] = b[i][j];
                index--;
            }
        }
    }
    return c;
}

function up(a) {
    var index = 0;
    var b = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    var c = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    for (var i = 0; i < 4; i++) {
        index = 0;
        for (var j = 0; j < 4; j++) {
            if (a[j][i] != 0) {
                b[index][i] = a[j][i];
                index++;
            }
        }
        for (j = 0; j < 4; j++) {
            if ((b[j][i] != 0) & (b[j][i] == b[j+1][i])) {
                b[j][i] = b[j][i] + b[j + 1][i];
                b[j + 1][i] = 0;
            }
        }
        index = 0;
        for (j = 0; j < 4; j++) {
            if (b[j][i] != 0) {
                c[index][i] = b[j][i];
                index++;
            }
        }
    }
    return c;
}

function down(a) {
    var index = 0;
    var b = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    var c = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    for (var i = 0; i < 4; i++) {
        index = 3;
        for (var j = 3; j >= 0; j--) {
            if (a[j][i] != 0) {
                b[index][i] = a[j][i];
                index--;
            }
        }
        for (var j = 3; j > 0; j--) {
            if ((b[j][i] != 0) & (b[j][i] == b[j-1][i])) {
                b[j][i] = b[j][i] + b[j - 1][i];
                b[j-1][i] = 0;
            }
        }
        index = 3;
        for (var j = 3; j >= 0; j--) {
            if (b[j][i] != 0) {
                c[index][i] = b[j][i];
                index--;
            }
        }
    }
    return c;
}