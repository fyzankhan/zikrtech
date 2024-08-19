<?php

namespace App\Repositories\Backend\Brand;
use App\Models\Brand;
use App\Repositories\Backend\Brand\BrandInterface;
use Illuminate\Support\Str;

class BrandRepository implements BrandInterface
{
    public function getAll()
    {
        return Brand::all();
    }

    public function findById($id)
    {
        return Brand::findOrFail($id);
    }

    public function create(array $data)
    {
        $data['slug'] = Str::slug($data['name']);
        return Brand::create($data);
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
        return Brand::paginate($perPage);
    }
}
