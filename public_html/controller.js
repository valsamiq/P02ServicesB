app.controller('MuestraPeliculas'
            ,['$scope', 'PeliculaService',function($scope,PeliculaService){ //fins aqui sols es per a crear el controller
            $scope.actoresController = PeliculaService.actores;
            $scope.peliculaController = PeliculaService.pelicula;
            $scope.peliculasController = PeliculaService.peliculas;
            $scope.numPeli=0;
}]);