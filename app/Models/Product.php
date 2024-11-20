<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;


    protected $fillable = [
        'name',
        'part_no',
        'slug',
        'thumb_image',
        'category_id',
        'sub_category_id',
        'brand_id',
        'qty',
        'short_description',
        'long_description',
        'sku',
        'price',
        'offer_price',
        'offer_start_date',
        'offer_end_date',
        'status',
        'is_approved',
        'seo_title',
        'seo_description',
    ];


    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function productImageGalleries()
    {
        return $this->hasMany(ProductImageGallery::class);
    }


    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function reviews()
    {
        return $this->hasMany(ProductReview::class);
    }
}
