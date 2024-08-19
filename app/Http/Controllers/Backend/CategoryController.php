<?php
namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryStoreRequest;
use App\Http\Requests\CategoryUpdateRequest;
use App\Repositories\Backend\Category\CategoryInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    protected $categoryRepository;
    private $directory = 'Backend/Category/';

    public function __construct(CategoryInterface $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function index()
    {
        $categories = $this->categoryRepository->paginate(10);
        return Inertia::render($this->directory . 'Index', [
            'categories' => $categories
        ]);
    }

    public function create()
    {
        return inertia('admin.category.create');
    }

    public function store(CategoryStoreRequest $request)
    {
        $this->categoryRepository->create($request->validated());

        toastr('Created Successfully!', 'success');
        return redirect()->route('admin.category.index');
    }

    public function edit($id)
    {


        $category = $this->categoryRepository->findById($id);
        return Inertia::render($this->directory . 'Edit', [
            'category' => $category
        ]);
    }

    public function update(CategoryUpdateRequest $request, $id)
    {
        $this->categoryRepository->update($request->validated(), $id);

        return redirect()->route('admin.categories.index')
            ->with('success', 'Category updated Successfully!');

    }

    public function destroy($id)
    {
        try {
            $this->categoryRepository->delete($id);
            return response(['status' => 'success', 'message' => 'Deleted Successfully!']);
        } catch (\Exception $e) {
            return response(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

    public function changeStatus(Request $request)
    {
        $this->categoryRepository->changeStatus($request->id, $request->status);

        return response(['message' => 'Status has been updated!']);
    }
}
