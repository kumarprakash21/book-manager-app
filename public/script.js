var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {

    // ✅ LOAD DATA
    var getData = function() {
        $http.get('/book')
        .then(function(res) {
            $scope.books = res.data;
        }, function(err) {
            console.error("GET ERROR:", err);
        });
    };

    getData();

    // ✅ ADD BOOK
    $scope.add_book = function() {

        var body = {
            name: $scope.Name,
            isbn: $scope.Isbn,
            author: $scope.Author,
            pages: Number($scope.Pages)
        };

        $http.post('/book', body)
        .then(function(res) {

            // clear form
            $scope.Name = "";
            $scope.Isbn = "";
            $scope.Author = "";
            $scope.Pages = "";

            getData();   // refresh
        }, function(err) {
            console.error("POST ERROR:", err);
        });
    };

    // ✅ DELETE BOOK
    $scope.del_book = function(book) {

        $http.delete('/book/' + book.isbn)
        .then(function(res) {
            getData();   // refresh
        }, function(err) {
            console.error("DELETE ERROR:", err);
        });
    };
});
