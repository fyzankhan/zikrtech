<?php

namespace App\Http\Controllers;

use App\Models\Slider;
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



}
