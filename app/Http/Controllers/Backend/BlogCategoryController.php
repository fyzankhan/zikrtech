<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Repositories\Blog\BlogCategoryInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogCategoryController extends Controller
{
    protected $blogCategoryRepository;
    private $directory = 'Backend/Blog/BlogCategories/';
    public function __construct(BlogCategoryInterface $blogCategoryRepository)
    {
        $this->blogCategoryRepository = $blogCategoryRepository;
    }

    public function index()
    {
        $categories = $this->blogCategoryRepository->getAll();
        return Inertia::render($this->directory . 'Index', [
            'categories' => $categories
        ]);
    }

    public function create()
    {
        return Inertia::render($this->directory . 'Create');
    }

    public function store(Request $request)
    {
        $this->blogCategoryRepository->create($request);

        return redirect()->route('admin.blog-categories.index')->with('success', 'Created Successfully!');
    }

    public function edit($id)
    {
        $category = $this->blogCategoryRepository->getById($id);
        return Inertia::render($this->directory . 'Edit', [
            'category' => $category
        ]);
    }

    public function update(Request $request, $id)
    {
        $this->blogCategoryRepository->update($request, $id);
        return redirect()->route('admin.blog-categories.index')->with('success', 'Blog category updated Successfully!');

    }

    public function destroy($id)
    {
        $this->blogCategoryRepository->delete($id);

        return redirect()->route('admin.blog-categories.index')->with('success', 'Deleted Successfully!');
    }

    public function changeStatus(Request $request)
    {
        $this->blogCategoryRepository->changeStatus($request);

        return redirect()->route('admin.blog-categories.index')->with('success', 'Status Updated Successfully!');
    }
}
