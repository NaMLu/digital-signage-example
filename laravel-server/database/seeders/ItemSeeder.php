<?php

namespace Database\Seeders;

use App\Models\Item;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Item::create([
            'name' => 'Ice',
            'url' => 'https://cdn.shopify.com/s/files/1/2018/8867/files/ice.mp4',
            'type' => 'video',
            'duration'=> 8,
        ]);

        Item::create([
            'name' => 'Random Image',
            'url' => 'https://loremflickr.com/1920/1080?random=1',
            'type' => 'image',
            'duration'=> 3,
        ]);
    }
}
