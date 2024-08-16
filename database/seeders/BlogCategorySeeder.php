<?php

namespace Database\Seeders;

use App\Models\BlogCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class BlogCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'GSA',
            'GSA bidding',
            'IT hardware Store',
            'IT services',
            'Cloud Computing',
            'Cybersecurity',
            'Software Development',
            'Networking',
            'Data Analytics',
            'Managed IT Services'
        ];

        foreach ($categories as $category) {
            BlogCategory::create([
                'name' => $category,
                'slug' => Str::slug($category),
                'status' => true, // or set false if you want them inactive by default
            ]);
        }
    }
}
