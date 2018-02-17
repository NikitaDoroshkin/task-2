(function (root) {
    var WATER = root.SHRI_ISLANDS.WATER;
    var ISLAND = root.SHRI_ISLANDS.ISLAND;

    var rows;
    var cellsSequence = [];
    /**
     * Бонусное задание.
     * Необходимо взять реализацию функции solution и доработать,
     * добавив функционал, который позволит пошагово визуализировать работу данного алгоритма.
     * Сигнатуру функции можно выбрать наиболее удобную для вашей визуализации
     */
    function visualizeSolution(map) {
        rows = document.getElementsByClassName('map__row');
        visualizeInner(map);
    }

    function visualizeInner(map) {
        function deleteIsland(i, j) {
            if (changeableMap[i][j] != ISLAND)
                return;
            cellsSequence.push({ i, j });
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
                } else {
                    cellsSequence.push({ i, j });
                }
            }
        }
        highlightSolution();
        return islandCounter;
    }

    function highlightSolution() {
        setInterval(function () {
            if (cellsSequence == 0)
                clearInterval();
            rows[cellsSequence[0].i].childNodes[cellsSequence[0].j].classList.add('map__cell_current');
            cellsSequence.shift(); 
        }, 500);
    }

    root.SHRI_ISLANDS.visualizeSolution = visualizeSolution;
})(this);
