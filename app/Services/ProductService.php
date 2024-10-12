<?php

namespace App\Services;

class ProductService
{
    public function checkDiscount($product)
    {
        $currentDate = date('Y-m-d');

        return $product->offer_price > 0 &&
            $currentDate >= $product->offer_start_date &&
            $currentDate <= $product->offer_end_date;
    }

    public function calculateDiscountPercent($originalPrice, $discountPrice)
    {
        if ($originalPrice == 0) {
            return 0;
        }

        $discountAmount = $originalPrice - $discountPrice;
        $discountPercent = ($discountAmount / $originalPrice) * 100;

        return round($discountPercent);
    }

    public function productType($type)
    {
        return match ($type) {
            'new_arrival' => 'New',
            'featured_product' => 'Featured',
            'top_product' => 'Top',
            'best_product' => 'Best',
            default => '',
        };
    }
}
