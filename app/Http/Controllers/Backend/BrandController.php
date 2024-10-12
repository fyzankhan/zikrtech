<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\BrandStoreRequest;
use App\Http\Requests\BrandUpdateRequest;
use App\Repositories\Backend\Brand\BrandInterface;
use App\Traits\ImageUploadTrait;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Str;

class BrandController extends Controller
{
    use ImageUploadTrait;

    protected $brandRepository;
    private $directory = 'Backend/Brand/';

    public function __construct(BrandInterface $brandRepository)
    {
        $this->brandRepository = $brandRepository;
    }

    public function index(Request $request)
    {
        $query = $this->brandRepository->query();

        if ($request->has('search')) {
            $search = $request->get('search');
            $query->where('name', 'LIKE', "%{$search}%")
                ->orWhere('slug', 'LIKE', "%{$search}%");
        }

        $brands = $query->paginate(10);

        return Inertia::render($this->directory . 'Index', [
            'brands' => $brands,
            'search' => $request->get('search')
        ]);
    }

    public function create()
    {
        return Inertia::render($this->directory . 'Create');
    }

    public function store(BrandStoreRequest $request)
    {
        $data = $request->validated();
        $data['logo'] = $this->uploadImage($request, 'logo', 'uploads/brands');
        $data['slug'] = Str::slug($data['name']);

        $this->brandRepository->create($data);

        return redirect()->route('admin.brands.index')->with('success', 'Created Successfully!');
    }

    public function edit(string $id)
    {
        $brand = $this->brandRepository->findById($id);

        return Inertia::render($this->directory . 'Edit', [
            'brand' => $brand
        ]);
    }

    public function update(BrandUpdateRequest $request, string $id)
    {
        $data = $request->validated();
        $brand = $this->brandRepository->findById($id);

        if ($request->hasFile('logo')) {
            $data['logo'] = $this->updateBrandImage($request, 'logo', 'uploads/brands', $brand->logo);
        }


        $this->brandRepository->update($data, $id);

        return redirect()->route('admin.brands.index')->with('success', 'Brand updated successfully!');
    }



    public function changeStatus(Request $request)
    {
        $brand = $this->brandRepository->changeStatus($request->id, $request->status == 'true');

        return response()->json(['message' => 'Status has been updated!']);
    }

    public function search(Request $request)
    {
        $query = $this->brandRepository->query();
        if ($request->has('query')) {
            $search = $request->get('query');
            $query->where('name', 'LIKE', "%{$search}%");
        }
        $brands = $query->paginate(10);
        return response()->json($brands);

    }
}
