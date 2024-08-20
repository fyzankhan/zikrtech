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
        $brand = $this->findById($id);
        $data['slug'] = Str::slug($data['name']);
        $brand->update($data);
        return $brand;
    }



    public function changeStatus($id, $status)
    {
        $brand = $this->findById($id);
        $brand->status = $status === 'true' ? 1 : 0;
        $brand->save();
        return $brand;
    }

    public function paginate($perPage = 10)
    {
        return Brand::paginate($perPage);
    }

    public function query()
    {
        return Brand::query();
    }
}
