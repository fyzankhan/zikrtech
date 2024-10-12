<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Slider;
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

    public function products(Request $request)
    {
        $products = Product::paginate(15);

        return Inertia::render('Store/AllProducts', [
            'initialProducts' => $products->items(),
            'canLoadMore' => $products->hasMorePages(),
            'nextPage' => $products->currentPage() + 1,
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

    public function loadMoreProducts(Request $request)
    {
        $page = $request->get('page', 1);

        $products = Product::paginate(15, ['*'], 'page', $page);

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

}
