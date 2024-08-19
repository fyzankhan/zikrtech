<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class MainController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function landing()
    {
        return Inertia::render('Landing', []);
    }



}
