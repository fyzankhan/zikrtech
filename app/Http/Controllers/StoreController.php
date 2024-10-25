<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\Slider;
use App\Models\SubCategory;
use Cache;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StoreController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sliders = Slider::where('status', 1)->get();
        return Inertia::render('Store/StoreMain', [
            'sliders' => $sliders
        ]);

    }



    public function showProduct(string $slug)
    {
        $product = Product::with(['category', 'productImageGalleries', 'brand'])
            ->where('slug', $slug)
            ->where('status', 1)->first();
        //  dd($product);

        if (!$product) {
            abort(404);
        }
        return Inertia::render('Store/Product', [
            'product' => $product
        ]);
    }


    // public function products(Request $request)
    // {
    //     $products = Product::paginate(15);

    //     return Inertia::render('Store/AllProducts', [
    //         'initialProducts' => $products->items(),
    //         'canLoadMore' => $products->hasMorePages(),
    //         'nextPage' => $products->currentPage() + 1,
    //     ]);
    // }

    public function products($slug = null)
    {
        //        $slug = $request->get('slug');  // Get the category or subcategory slug from the request

        // If a slug is provided, filter products by category or subcategory
        if ($slug) {
            // Try to find a category or subcategory with the provided slug
            $category = Category::where('slug', $slug)->first();
            $subcategory = SubCategory::where('slug', $slug)->first();
            $brand = Brand::where('slug', $slug)->first();
            if ($category) {
                // If a category is found, filter products by category_id
                $products = Product::where('category_id', $category->id)->paginate(15);
            } elseif ($subcategory) {
                // If a subcategory is found, filter products by subcategory_id
                $products = Product::where('sub_category_id', $subcategory->id)->paginate(15);
            } elseif ($brand) {
                $products = Product::where('brand_id', $brand->id)->paginate(15);

            } else {
                // If no category or subcategory matches the slug, return an empty collection
                $products = Product::paginate(15);  // fallback, you can choose to return empty here as well
            }
        } else {
            // If no slug is provided, fetch all products
            $products = Product::paginate(15);
        }

        return Inertia::render('Store/AllProducts', [
            'initialProducts' => $products->items(),
            'canLoadMore' => $products->hasMorePages(),
            'nextPage' => $products->currentPage() + 1,
        ]);
    }

    // public function loadMoreProducts(Request $request)
    // {
    //     $page = $request->get('page', 1);

    //     $products = Product::paginate(15, ['*'], 'page', $page);

    //     return response()->json([
    //         'products' => $products->items(),
    //         'canLoadMore' => $products->hasMorePages(),
    //         'nextPage' => $page + 1,
    //     ]);
    // }


    public function loadMoreProducts(Request $request)
    {
        $page = $request->get('page', 1);
        $slug = $request->get('slug');


        if ($slug) {
            $category = Category::where('slug', $slug)->first();
            $subcategory = SubCategory::where('slug', $slug)->first();
            $brand = Brand::where('slug', $slug)->first();
            if ($category) {

                $products = Product::where('category_id', $category->id)->paginate(15, ['*'], 'page', $page);
            } elseif ($subcategory) {

                $products = Product::where('sub_category_id', $subcategory->id)->paginate(15, ['*'], 'page', $page);
            } elseif ($brand) {
                $products = Product::where('brand_id', $brand->id)->paginate(15);

            } else {

                $products = Product::paginate(15, ['*'], 'page', $page);
            }
        } else {

            $products = Product::paginate(15, ['*'], 'page', $page);
        }

        return response()->json([
            'products' => $products->items(),
            'canLoadMore' => $products->hasMorePages(),
            'nextPage' => $page + 1,
        ]);
    }


    public function featured(Request $request)
    {
        $products = Product::limit(8)->get();
        return response()->json($products, 200);


    }


    public function hardwareMenu(Request $request)
    {
        $categories = Category::where('is_menu', 1)
            ->with([
                'subCategories' => function ($query) {
                    $query->limit(6);
                }
            ])
            ->get();

        return response()->json($categories, 200);
    }
    public function checkout()
    {


        return Inertia::render('Store/Checkout', []);
    }

    public function cart()
    {
        return Inertia::render('Store/Cart', []);
    }
}
