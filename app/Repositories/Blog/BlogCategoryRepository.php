<?php

namespace App\Repositories\Blog;

use App\Models\BlogCategory;
use App\Repositories\Blog\BlogCategoryInterface;
use Illuminate\Http\Request;
use Str;

class BlogCategoryRepository implements BlogCategoryInterface
{
    public function getAll()
    {
        return BlogCategory::all();
    }

    public function getById($id)
    {
        return BlogCategory::findOrFail($id);
    }

    public function create(Request $request)
    {
        $request->validate([
            'name' => ['required', 'max:200', 'unique:blog_categories']
        ], [
            'name.unique' => 'Category already exists!'
        ]);

        $category = new BlogCategory();
        $category->name = $request->name;
        $category->slug = Str::slug($request->name);
        $category->status = $request->status;
        $category->save();

        return $category;
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => ['required', 'max:200', 'unique:blog_categories,name,' . $id]
        ], [
            'name.unique' => 'Category already exists!'
        ]);

        $category = BlogCategory::findOrFail($id);
        $category->name = $request->name;
        $category->slug = Str::slug($request->name);
        $category->status = $request->status;
        $category->save();

        return $category;
    }

    public function delete($id)
    {
        $category = BlogCategory::findOrFail($id);
        $category->delete();

        return response(['status' => 'success', 'message' => 'Deleted successfully!']);
    }

    public function changeStatus(Request $request)
    {
        $category = BlogCategory::findOrFail($request->id);
        $category->status = $request->status == 'true' ? 1 : 0;
        $category->save();

        return response(['message' => 'Status has been updated!']);
    }
}
