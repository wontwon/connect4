var connect4App = function () {

    var vm = function () {
        var players = {
            red: 'red',
            black: 'black'
        };
        var playerTurn = players.red;
        var rows = []; // an array of references to each row
        return {
            players: players,
            playerTurn: playerTurn,
            rows: rows
        };
    }();

    var board = function () {
        var _getEmptyCell = function (columnIndex) {
            var cell;
            for (var i = 0; i < vm.rows.length; i++) {
                cell = $(vm.rows[i]).children()[columnIndex];

                if (!$(cell).hasClass('red') && !$(cell).hasClass('black')) {
                    return cell;
                }
            }
        };

        var _colorCell = function (cell) {
            if (vm.playerTurn === vm.players.red) $(cell).addClass('red');
            else $(cell).addClass('black');
        };

        var _toggleTurn = function () {
            if (vm.playerTurn === vm.players.black) vm.playerTurn = vm.players.red;
            else vm.playerTurn = vm.players.black;
        };
        
        var _reset = function() {
            $(vm.rows).children().each(function(index, cell) {
                $(cell).attr('class', '');
            });
        };
        
        var _checkForWinner = function(){
            //TO:DO
            
            //...some if else
            
            scoreBoard.recordRedWin();
};
        var initialize = function () {

            var setupBoard = function () {
                $('tr').each(function (col, row) {
                    vm.rows.push(row);
                    $(row).children().each(function (i, cell) {
                        $(cell).click(function () {
                            _colorCell(_getEmptyCell(i));
                            _checkForWinner();
                            _toggleTurn();
                        });
                    });
                });
                vm.rows.reverse();
            }();
            
            var setupResetBtn = function() {
                $('#btn_reset').click(function() {
                    _reset();
                });
            }();
        };

        return {
            init: initialize
        };
    }();
    
    var scoreBoard = function() {
        return {
            recordRedWin: null,
            recordBlackWin: null
        };
    }();

    board.init();
}();