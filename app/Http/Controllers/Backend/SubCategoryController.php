<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryStoreRequest;
use App\Http\Requests\CategoryUpdateRequest;
use App\Repositories\Backend\SubCategory\SubCategoryInterface;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubCategoryController extends Controller
{
    protected $subCategoryRepository;
    private $directory = 'Backend/SubCategory/';

    public function __construct(SubCategoryInterface $subCategoryRepository)
    {
        $this->subCategoryRepository = $subCategoryRepository;
    }



    public function index(Request $request)
    {
        $query = $this->subCategoryRepository->query()->with('category');

        if ($request->has('search')) {
            $search = $request->get('search');
            $query->where('name', 'LIKE', "%{$search}%")
                ->orWhere('slug', 'LIKE', "%{$search}%");
        }

        $categories = $query->paginate(10);
        // dd($query->toSql(), $query->getBindings());

        // dd($categories);
        //     dd($categories->toArray());

        return Inertia::render($this->directory . 'Index', [
            'categories' => $categories,
            'search' => $request->get('search')
        ]);
    }


    public function create()
    {
        return Inertia::render($this->directory . 'Create');
    }

    public function store(CategoryStoreRequest $request)
    {
        $this->subCategoryRepository->create($request->validated());

        return redirect()->route('admin.sub-categories.index')
            ->with('success', 'Category Created Successfully!');
    }

    public function edit($id)
    {

        $category = $this->subCategoryRepository->findById($id);
        return Inertia::render($this->directory . 'Edit', [
            'category' => $category
        ]);
    }

    public function update(CategoryUpdateRequest $request, $id)
    {
        $this->subCategoryRepository->update($request->validated(), $id);

        return redirect()->route('admin.sub-categories.index')
            ->with('success', 'Category updated Successfully!');

    }

    public function destroy($id)
    {

    }

    public function changeStatus(Request $request)
    {
        $this->subCategoryRepository->changeStatus($request->id, $request->status);

        return response(['message' => 'Status has been updated!']);
    }

    public function search(Request $request)
    {
        $query = $this->subCategoryRepository->query();
        if ($request->has('query')) {
            $search = $request->get('query');
            $query->where('name', 'LIKE', "%{$search}%");
        }
        $categories = $query->paginate(10);
        return response()->json($categories);

    }
}



// namespace App\Http\Controllers\Backend;

// use App\Http\Controllers\Controller;
// use App\Models\Category;
// use App\Models\SubCategory;
// use Illuminate\Http\Request;
// use Str;

// class SubCategoryController extends Controller
// {
//     /**
//      * Display a listing of the resource.
//      */
//     public function index()
//     {

//     }

//     /**
//      * Show the form for creating a new resource.
//      */
//     public function create()
//     {
//         $categories = Category::all();
//         return view('admin.sub-category.create', compact('categories'));
//     }

//     /**
//      * Store a newly created resource in storage.
//      */
//     public function store(Request $request)
//     {
//         $request->validate([
//             'category' => ['required'],
//             'name' => ['required', 'max:200', 'unique:sub_categories,name'],
//             'status' => ['required']
//         ]);

//         $subCategory = new SubCategory();

//         $subCategory->category_id = $request->category;
//         $subCategory->name = $request->name;
//         $subCategory->slug = Str::slug($request->name);
//         $subCategory->status = $request->status;
//         $subCategory->save();


//         return redirect()->route('admin.sub-category.index');

//     }

//     /**
//      * Display the specified resource.
//      */
//     public function show(string $id)
//     {
//         //
//     }

//     /**
//      * Show the form for editing the specified resource.
//      */
//     public function edit(string $id)
//     {
//         $categories = Category::all();
//         $subCategory = SubCategory::findOrFail($id);
//         return view('admin.sub-category.edit', compact('subCategory', 'categories'));
//     }

//     /**
//      * Update the specified resource in storage.
//      */
//     public function update(Request $request, string $id)
//     {
//         $request->validate([
//             'category' => ['required'],
//             'name' => ['required', 'max:200', 'unique:sub_categories,name,' . $id],
//             'status' => ['required']
//         ]);

//         $subCategory = SubCategory::findOrFail($id);

//         $subCategory->category_id = $request->category;
//         $subCategory->name = $request->name;
//         $subCategory->slug = Str::slug($request->name);
//         $subCategory->status = $request->status;
//         $subCategory->save();


//         return redirect()->route('admin.sub-category.index');
//     }

//     /**
//      * Remove the specified resource from storage.
//      */
//     public function destroy(string $id)
//     {

//     }

//     public function changeStatus(Request $request)
//     {
//         $category = SubCategory::findOrFail($request->id);
//         $category->status = $request->status == 'true' ? 1 : 0;
//         $category->save();

//         return response(['message' => 'Status has been updated!']);
//     }
// }
