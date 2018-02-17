(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    /**
     * Функция находит кол-во островов на карте
     * ВАЖНО! Сигнатуру функции изменять нельзя!
     *
     * @param {number[][]} map карта островов представленная двумерной матрицей чисел
     * @returns {number} кол-во островов
     */

    function solution(map) {
        function deleteIsland(i, j) {
            if (changeableMap[i][j] != ISLAND)
                return;
            changeableMap[i][j] = WATER;
            if (i + 1 < N)
                deleteIsland(i + 1, j);
            if (i - 1 >= 0)
                deleteIsland(i - 1, j);
            if (j + 1 < N)
                deleteIsland(i, j + 1);
            if (j - 1 >= 0)
                deleteIsland(i, j - 1);
        }

        var changeableMap = [];
        for (i = 0; i < map.length; ++i)
            changeableMap[i] = map[i].slice();
            
        var islandCounter = 0;
        var N = changeableMap.length;
        var M = changeableMap[0].length;

        for (i = 0; i < N; i++) {
            for (j = 0; j < M; j++) {
                if (changeableMap[i][j] == ISLAND) {
                    ++islandCounter;
                    deleteIsland(i, j);
                }
            }
        }
        return islandCounter;
    }



    root.SHRI_ISLANDS.solution = solution;
})(this);
