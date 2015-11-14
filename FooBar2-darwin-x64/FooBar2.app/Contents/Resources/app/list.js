(function() {
    'use strict';
    var app = angular.module('fullHeightModule', ['ngMaterial']);
    app.controller('DataController', ['$scope', dataController]);
    
    function dataController($scope) {
        $scope.view = {
            data: [
                { "id": "21AF221D-EB3C-4EA9-CBCA-A1EAB6CB759B", "name": "Joseph", "lastname": "Clarke", "email": "adipiscing.elit@nuncacmattis.net", "slogan": "leo. Morbi neque tellus, imperdiet" },
                { "id": "A5B59E4A-FBEB-295E-5A9F-707F8947B156", "name": "Dakota", "lastname": "Hale", "email": "egestas.Fusce.aliquet@risus.ca", "slogan": "aliquet, metus urna convallis erat," },
                { "id": "95677347-56EC-1DB6-C2DC-6523DE194183", "name": "Seth", "lastname": "Pruitt", "email": "et.netus@vitae.ca", "slogan": "dapibus gravida. Aliquam tincidunt, nunc" },
                { "id": "A00E50BC-3D8D-0FC6-3FC6-E9FF8EEE39B2", "name": "Cally", "lastname": "Carrillo", "email": "auctor.non@volutpatNulla.edu", "slogan": "pellentesque massa lobortis ultrices. Vivamus" },
                { "id": "8FA046DA-93D1-C195-0C0B-22CC9752A349", "name": "Harlan", "lastname": "Travis", "email": "Curabitur@pharetra.com", "slogan": "Nulla eu neque pellentesque massa" },
                { "id": "9F0A3FD3-1FED-4669-0E4E-DDC5AC47112E", "name": "Pearl", "lastname": "Hardy", "email": "sem.egestas@viverraDonectempus.net", "slogan": "Etiam ligula tortor, dictum eu," },
                { "id": "12E9742A-CDA7-1239-7C3D-DEE378ED89B2", "name": "Stephen", "lastname": "Gentry", "email": "auctor@augue.ca", "slogan": "purus mauris a nunc. In" }
            ]
        };
    }
})();