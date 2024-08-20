<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Fetch all brands and categories
        $brands = DB::table('brands')->pluck('id', 'name')->toArray();
        $categories = DB::table('categories')->pluck('id', 'name')->toArray();

        $products = [];

        for ($i = 1; $i <= 100; $i++) {
            $brandName = array_rand($brands);
            $categoryName = array_rand($categories);
            $categoryId = $categories[$categoryName];

            // Fetch subcategories that belong to the selected category
            $subCategories = DB::table('sub_categories')
                ->where('category_id', $categoryId)
                ->pluck('id', 'name')
                ->toArray();

            $subCategoryName = count($subCategories) > 0 ? array_rand($subCategories) : null;
            $subCategoryId = $subCategoryName ? $subCategories[$subCategoryName] : null;

            $name = $this->generateProductName($brandName, $categoryName, $subCategoryName);
            $sku = 'SKU-' . strtoupper(Str::random(10));

            $products[] = [
                'name' => $name,
                'slug' => Str::slug($name),
                'thumb_image' => 'uploads/products/default.jpg',
                'category_id' => $categoryId,
                'sub_category_id' => $subCategoryId,
                'brand_id' => $brands[$brandName],
                'qty' => 1,
                'short_description' => 'Short description for ' . $name,
                'long_description' => 'Long description for ' . $name,
                'sku' => $sku,
                'price' => rand(500, 3000),
                'offer_price' => rand(1, 10) > 7 ? rand(100, 499) : null,
                'offer_start_date' => rand(1, 10) > 7 ? now() : null,
                'offer_end_date' => rand(1, 10) > 7 ? now()->addDays(rand(1, 30)) : null,
                'status' => true,
                'is_approved' => 1,
                'seo_title' => $name . ' - Best price available!',
                'seo_description' => 'Get the best deals on ' . $name . ' only here.',
            ];
        }

        DB::table('products')->upsert($products, ['sku'], ['name', 'slug', 'thumb_image', 'category_id', 'sub_category_id', 'brand_id', 'qty', 'short_description', 'long_description', 'price', 'offer_price', 'offer_start_date', 'offer_end_date', 'status', 'is_approved', 'seo_title', 'seo_description', 'updated_at']);
    }


    private function generateProductName($brand, $category, $subCategory)
    {
        if ($subCategory) {
            return $brand . ' ' . $category . ' - ' . $subCategory;
        } else {
            return $brand . ' ' . $category;
        }
    }

}
