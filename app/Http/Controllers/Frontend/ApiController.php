<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Brand;

use Illuminate\Http\Request;

class ApiController extends Controller
{


    public function brands()
    {
        $brands = Brand::where('is_featured', 1)->get();
        return response()->json(["brands" => $brands]);

    }
}
