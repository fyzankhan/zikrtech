<?php

namespace App\Repositories\Backend\Product;

use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;
use App\Models\OrderProduct;
use App\Models\ProductImageGallery;
use App\Models\ProductSpecification;

class ProductRepository implements ProductInterface
{
    public function getAll()
    {
        return Product::all();
    }

    public function findById($id)
    {
        return Product::findOrFail($id);
    }

    public function create(array $data)
    {
        return Product::create($data);
    }

    public function update(array $data, $id)
    {
        $product = $this->findById($id);
        $product->update($data);
        return $product;
    }

    public function delete($id)
    {
        $product = $this->findById($id);
        $product->delete();
    }

    public function changeStatus($id, $status)
    {
        $product = $this->findById($id);
        $product->status = $status ? 1 : 0;
        $product->save();
        return $product;
    }

    public function paginate($perPage = 10)
    {
        return Product::paginate($perPage);
    }

    public function query()
    {
        return Product::query();
    }

    public function getCategories()
    {
        return Category::limit(10)->get();
    }

    public function getBrands()
    {
        return Brand::limit(10)->get();
    }

    public function getSubCategories($categoryId)
    {
        return Category::findOrFail($categoryId)->subCategories;
    }

    public function hasOrders($productId)
    {
        return OrderProduct::where('product_id', $productId)->exists();
    }


}
