<?php
namespace App\Repositories\Backend\SubCategory;

interface SubCategoryInterface
{
    public function getAll();
    public function findById($id);
    public function create(array $data);
    public function update(array $data, $id);
    public function delete($id);
    public function changeStatus($id, $status);
    public function paginate($perPage = 10);
    public function query();

}
