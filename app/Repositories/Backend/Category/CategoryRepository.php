<?php

namespace App\Repositories\Backend\Category;

use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Support\Str;

class CategoryRepository implements CategoryInterface
{
    public function getAll()
    {
        return Category::all();
    }

    public function findById($id)
    {
        return Category::findOrFail($id);
    }

    public function create(array $data)
    {
        $data['slug'] = Str::slug($data['name']);
        return Category::create($data);
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
        $category = $this->findById($id);
        $subCategoryCount = SubCategory::where('category_id', $id)->count();

        if ($subCategoryCount > 0) {
            throw new \Exception('This category contains subcategories. Please delete them first.');
        }

        $category->delete();
    }

    public function changeStatus($id, $status)
    {
        $category = $this->findById($id);
        $category->status = $status == 'true' ? 1 : 0;
        $category->save();
    }

    public function paginate($perPage = 10)
    {
        return Category::paginate($perPage);
    }
}
