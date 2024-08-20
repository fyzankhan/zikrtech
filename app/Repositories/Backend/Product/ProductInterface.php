<?php

namespace App\Repositories\Backend\Product;

interface ProductInterface
{
    public function getAll();
    public function findById($id);
    public function create(array $data);
    public function update(array $data, $id);
    public function changeStatus($id, $status);
    public function paginate($perPage = 10);
    public function query();
    public function getCategories();
    public function getBrands();
    public function getSubCategories($categoryId);
    public function hasOrders($productId);

}
