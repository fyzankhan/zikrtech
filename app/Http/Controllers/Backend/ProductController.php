<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductStoreRequest;
use App\Http\Requests\ProductUpdateRequest;
use App\Repositories\Backend\Product\ProductInterface;
use App\Traits\ImageUploadTrait;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Str;

class ProductController extends Controller
{
    use ImageUploadTrait;

    protected $productRepository;
    private $directory = 'Backend/Product/';

    public function __construct(ProductInterface $productRepository)
    {
        $this->productRepository = $productRepository;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = $this->productRepository->query();

        if ($request->has('search')) {
            $search = $request->get('search');
            $query->where('name', 'LIKE', "%{$search}%")
                ->orWhere('slug', 'LIKE', "%{$search}%");
        }

        $products = $query->paginate(10);

        return Inertia::render($this->directory . 'Index', [
            'products' => $products,
            'search' => $request->get('search')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = $this->productRepository->getCategories();
        $brands = $this->productRepository->getBrands();

        return Inertia::render(
            $this->directory . 'Create',
            [
                'categories' => $categories
                ,
                'brands' => $brands
            ]
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductStoreRequest $request)
    {

        $data = $request->validated();
        $data['thumb_image'] = $this->uploadImage($request, 'thumb_image', 'uploads/products');
        $data['slug'] = Str::slug($data['name']);

        $this->productRepository->create($data);

        return redirect()->route('admin.products.index')->with('success', 'Product created successfully!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $product = $this->productRepository->findById($id);


        return Inertia::render('Backend/Product/Edit', compact('product'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductUpdateRequest $request, string $id)
    {
        $data = $request->validated();
        $product = $this->productRepository->findById($id);

        if ($request->hasFile('thumb_image')) {
            $data['thumb_image'] = $this->updateImage($request, 'thumb_image', 'uploads/products', $product->thumb_image);
        } else {

            unset($data['thumb_image']);
        }

        $data['slug'] = Str::slug($data['name']);

        $this->productRepository->update($data, $id);

        return redirect()->route('admin.products.index')->with('success', 'Product updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

    }

    public function changeStatus(Request $request)
    {
        $this->productRepository->changeStatus($request->id, $request->status == 'true');

        return response()->json(['message' => 'Product status has been updated!']);
    }

    /**
     * Get all product subcategories.
     */
    public function getSubCategories(Request $request)
    {
        $subCategories = $this->productRepository->getSubCategories($request->id);

        return response()->json($subCategories);
    }
}
