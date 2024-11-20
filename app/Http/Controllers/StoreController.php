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

use Illuminate\Support\Facades\Route;
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


    // modify it, 

    // 1.0 : if there route is category/slug then show those products
// 1.1 : if there route is category/slug but there is brand filter then show those products filter by brand id

    // 2.0 : if there route is brand/slug then show those products
// 2.1 : if there route is brand/slug but there is category or subcategory filter then show those products filter by category or subcategory id

    // 2.0 : if there route is search?query then show those products from products columns
// 2.1 : if there route is  search?query but there is (category or subcategory or brand) (category or subcategory + brand) filter then show those products filter by category  subcategory  brand
    // public function products($slug = null)
    // {



    //     if ($slug) {
    //         $category = Category::where('slug', $slug)->first();
    //         $subcategory = SubCategory::where('slug', $slug)->first();
    //         $brand = Brand::where('slug', $slug)->first();
    //         if ($category) {
    //             $products = Product::where('category_id', $category->id)->paginate(15);
    //         } elseif ($subcategory) {
    //             $products = Product::where('sub_category_id', $subcategory->id)->paginate(15);
    //         } elseif ($brand) {
    //             $products = Product::where('brand_id', $brand->id)->paginate(15);

    //         } else {
    //             // If no category or subcategory matches the slug, return an empty collection
    //             $products = Product::paginate(15);  // fallback, you can choose to return empty here as well
    //         }
    //     } else {
    //         // If no slug is provided, fetch all products
    //         $products = Product::paginate(15);
    //     }

    //     return Inertia::render('Store/AllProducts', [
    //         'initialProducts' => $products->items(),
    //         'canLoadMore' => $products->hasMorePages(),
    //         'nextPage' => $products->currentPage() + 1,
    //     ]);
    // }



    // public function loadMoreProducts(Request $request)
    // {
    //     $page = $request->get('page', 1);
    //     $slug = $request->get('slug');


    //     if ($slug) {
    //         $category = Category::where('slug', $slug)->first();
    //         $subcategory = SubCategory::where('slug', $slug)->first();
    //         $brand = Brand::where('slug', $slug)->first();
    //         if ($category) {

    //             $products = Product::where('category_id', $category->id)->paginate(15, ['*'], 'page', $page);
    //         } elseif ($subcategory) {

    //             $products = Product::where('sub_category_id', $subcategory->id)->paginate(15, ['*'], 'page', $page);
    //         } elseif ($brand) {
    //             $products = Product::where('brand_id', $brand->id)->paginate(15);

    //         } else {

    //             $products = Product::paginate(15, ['*'], 'page', $page);
    //         }
    //     } else {

    //         $products = Product::paginate(15, ['*'], 'page', $page);
    //     }

    //     return response()->json([
    //         'products' => $products->items(),
    //         'canLoadMore' => $products->hasMorePages(),
    //         'nextPage' => $page + 1,
    //     ]);
    // }




    public function products(Request $request)
    {
        $productsQuery = Product::query();

        // Get current route name to identify the type of request
        $routeName = Route::currentRouteName();
        $slug = '';
        $pageType = '';
        switch ($routeName) {
            case 'products.category':
                $slug = $request->route('slug');
                $pageType = 'category';
                $category = Category::where('slug', $slug)->first();
                if ($category) {
                    $productsQuery->where('category_id', $category->id);
                }
                if ($request->has('brand_id')) {
                    $productsQuery->where('brand_id', $request->get('brand_id'));
                }
                break;

            case 'products.brand':
                $slug = $request->route('slug');
                $pageType = 'brand';
                $brand = Brand::select('id')->where('slug', $slug)->first();

                if ($brand) {
                    $productsQuery->where('brand_id', $brand->id);
                }
                if ($request->has('category_id')) {
                    $productsQuery->where('category_id', $request->get('category_id'));
                }
                if ($request->has('sub_category_id')) {
                    $productsQuery->where('sub_category_id', $request->get('sub_category_id'));
                }
                break;

            case 'search.index':
                $pageType = 'search';
                $productsQuery->where('name', 'like', '%' . $request->get('query') . '%');
                if ($request->has('category_id')) {
                    $productsQuery->where('category_id', $request->get('category_id'));
                }
                if ($request->has('sub_category_id')) {
                    $productsQuery->where('sub_category_id', $request->get('sub_category_id'));
                }
                if ($request->has('brand_id')) {
                    $productsQuery->where('brand_id', $request->get('brand_id'));
                }
                break;

            default:
                // Fallback for all products or other routes
                break;
        }

        // Paginate the products
        $products = $productsQuery->paginate(15);

        return Inertia::render('Store/AllProducts', [
            'slug' => $slug,
            'pageType' => $pageType,
            'initialProducts' => $products->items(),
            'canLoadMore' => $products->hasMorePages(),
            'nextPage' => $products->currentPage() + 1,
        ]);
    }

    public function loadMoreProducts(Request $request)
    {
        $page = $request->get('page', 1);
        $productsQuery = Product::query();

        $routeName = Route::currentRouteName();

        switch ($routeName) {
            case 'category.show':
                $category = Category::where('slug', $request->route('slug'))->first();
                if ($category) {
                    $productsQuery->where('category_id', $category->id);
                }
                if ($request->has('brand_id')) {
                    $productsQuery->where('brand_id', $request->get('brand_id'));
                }
                break;

            case 'brand.show':
                $brand = Brand::where('slug', $request->route('slug'))->first();
                if ($brand) {
                    $productsQuery->where('brand_id', $brand->id);
                }
                if ($request->has('category_id')) {
                    $productsQuery->where('category_id', $request->get('category_id'));
                }
                if ($request->has('sub_category_id')) {
                    $productsQuery->where('sub_category_id', $request->get('sub_category_id'));
                }
                break;

            case 'search.index':
                $productsQuery->where('name', 'like', '%' . $request->get('query') . '%');
                if ($request->has('category_id')) {
                    $productsQuery->where('category_id', $request->get('category_id'));
                }
                if ($request->has('sub_category_id')) {
                    $productsQuery->where('sub_category_id', $request->get('sub_category_id'));
                }
                if ($request->has('brand_id')) {
                    $productsQuery->where('brand_id', $request->get('brand_id'));
                }
                break;

            default:
                // Fallback for other routes or all products
                break;
        }

        $products = $productsQuery->paginate(15, ['*'], 'page', $page);

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


}
