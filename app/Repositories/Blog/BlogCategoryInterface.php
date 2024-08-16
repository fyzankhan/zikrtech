<?php

namespace App\Repositories\Blog;

use Illuminate\Http\Request;

interface BlogCategoryInterface
{
    public function getAll();
    public function getById($id);
    public function create(Request $request);
    public function update(Request $request, $id);
    public function delete($id);
    public function changeStatus(Request $request);
}
