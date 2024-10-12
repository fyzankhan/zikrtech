<?php

namespace App\Services;

use Illuminate\Support\Str;

class TextService
{
    public function limitText($text, $limit = 20)
    {
        return Str::limit($text, $limit);
    }
}
