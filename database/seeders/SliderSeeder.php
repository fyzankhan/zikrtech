<?php

namespace Database\Seeders;

use App\Models\Slider;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Slider::create([
            'banner' => 'images/slider1.jpg',
            'type' => 'Promotion',
            'title' => 'Summer Sale',
            'starting_price' => 99.99,
            'btn_url' => 'https://example.com/summer-sale',
            'serial' => 1,
            'status' => 1,
        ]);

        Slider::create([
            'banner' => 'images/slider2.jpg',
            'type' => 'New Arrivals',
            'title' => 'Latest Collection',
            'starting_price' => 79.99,
            'btn_url' => 'https://example.com/new-arrivals',
            'serial' => 2,
            'status' => 1,
        ]);

        Slider::create([
            'banner' => 'images/slider3.jpg',
            'type' => 'Clearance',
            'title' => 'End of Season',
            'starting_price' => 49.99,
            'btn_url' => 'https://example.com/clearance',
            'serial' => 3,
            'status' => 1,
        ]);

        Slider::create([
            'banner' => 'images/slider4.jpg',
            'type' => 'Exclusive',
            'title' => 'Member Special',
            'starting_price' => 129.99,
            'btn_url' => 'https://example.com/exclusive',
            'serial' => 4,
            'status' => 1,
        ]);

        Slider::create([
            'banner' => 'images/slider5.jpg',
            'type' => 'Flash Sale',
            'title' => 'Limited Time Offer',
            'starting_price' => 59.99,
            'btn_url' => 'https://example.com/flash-sale',
            'serial' => 5,
            'status' => 1,
        ]);
    }
}
