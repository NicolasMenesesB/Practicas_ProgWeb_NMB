var app = angular.module('ProductApp', []);
app.controller('ProductController', ($scope) => {
    $scope.product = {};
    $scope.products = new Array();
    

    $scope.addProduct = () => {
        $scope.products.push({
            name: $scope.product.name,
            price: parseInt($scope.product.price) + "$",
            quantity: parseInt($scope.product.quantity),
            description: $scope.product.description,

        });

       
        this.txtName.value = '';
        this.txtPrice.value = '';
        this.txtQuantity.value = '';
        this.txtDescription.value = '';
    }
       

    $scope.daleteProduct = (i) => {
        $scope.products.splice(i, 1);
    }
});