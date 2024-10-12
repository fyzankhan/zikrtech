<?php

namespace App\Repositories\Backend\SubCategory;

use App\Models\SubCategory;
use Illuminate\Support\Str;

class SubCategoryRepository implements SubCategoryInterface
{
    public function getAll()
    {
        return SubCategory::all();
    }

    public function findById($id)
    {
        return SubCategory::findOrFail($id);
    }

    public function create(array $data)
    {
        $data['slug'] = Str::slug($data['name']);
        return SubCategory::create($data);
    }

    public function update(array $data, $id)
    {
        $category = $this->findById($id);
        $data['slug'] = Str::slug($data['name']);
        $category->update($data);
        return $category;
    }

    public function delete($id)
    {

    }

    public function changeStatus($id, $status)
    {
        $category = $this->findById($id);
        $category->status = $status == 'true' ? 1 : 0;
        $category->save();
    }

    public function paginate($perPage = 10)
    {
        return SubCategory::paginate($perPage);
    }

    public function query()
    {
        return SubCategory::query();
    }
}
