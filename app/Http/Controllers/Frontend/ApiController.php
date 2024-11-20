<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Brand;

use App\Models\Category;
use Illuminate\Http\Request;

class ApiController extends Controller
{


    public function brands()
    {
        $brands = Brand::where('is_featured', 1)->get();
        return response()->json(["brands" => $brands]);

    }



    public function categories()
    {
        $categories = Category::where('is_featured', 1)->get();
        return response()->json(["categories" => $categories]);

    }


    public function categorybrands($categorySlug)
    {

        $category = Category::where('slug', $categorySlug)->first();

        if (!$category) {
            return response()->json(["error" => "Category not found"], 404);
        }


        $brands = Brand::whereHas('products', function ($query) use ($category) {
            $query->where('category_id', $category->id);
        })->where('status', 1)->distinct()->get();

        return response()->json(["brands" => $brands]);
    }



    public function brandcategories($brandSlug)
    {

        $brand = Brand::where('slug', $brandSlug)->first();

        if (!$brand) {
            return response()->json(["error" => "Brand not found"], 404);
        }


        $categories = Category::whereHas('products', function ($query) use ($brand) {
            $query->where('brand_id', $brand->id);
        })->where('status', 1)->distinct()->get();

        return response()->json(["categories" => $categories]);
    }

}
