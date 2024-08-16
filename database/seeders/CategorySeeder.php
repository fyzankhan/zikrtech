<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $categories = [
            'Accessories' => [
                'A/V Control Panels',
                'Airflow Systems',
                'Airflow Systems Filters',
                'Analog & Digital Timers',
                'Antennas',
                'Auto Duplex Units',
                'Auto Slide Feeders',
                'Backplane & Hardwire Kits',
                'Bags',
                'Battery Doors',
            ],
            'AIDC/POS' => [
                'Bar Code Readers',
                'Cash Registers',
                'Check Readers',
                'Handheld Terminals',
                'Magnetic Stripe Readers',
                'Multistation Printers',
                'Payment Terminals',
                'Pole Displays',
                'POS Keyboards',
                'POS Kiosks',
            ],
            'Computer Displays' => [
                'Document Cameras',
                'Electronic Writing Boards',
                'Monitors',
                'Touchscreen Monitors',
            ],
            'Computer Systems' => [
                'Barebone Systems',
                'Blade Servers',
                'Desktop Computers',
                'Entry-level Servers',
                'Mobile Computers',
                'Notebooks',
                'Tablet PCs',
                'Terminals/Thin Clients',
                'Ultra Mobile PCs',
                'Workstations',
            ],
            'Consumer Electronics' => [
                '3D Glasses',
                '3D Sync Transmitters',
                'A/V Receivers & Amplifiers',
                'Audio Cassettes',
                'Audio Disc Players/Recorders',
                'Automotive & Marine Displays',
                'Binoculars/Monoculars',
                'Boomboxes',
                'Camcorders',
                'Cassette Players/Recorders',
            ],
            'Electronic Components' => [
                'Cache Memory',
                'Graphics Computing Systems',
                'Memory Cards',
                'Memory Expansion Boards',
                'Microprocessors',
                'Motherboards',
                'RAM Modules',
                'ROM Modules',
            ],
            'Environmental Devices' => [
                'Motion Sensors',
                'Smoke & Leak Sensors',
                'Temperature & Humidity Sensors',
                'Weather Stations',
            ],
            'Hardware & Tools' => [
                'Tools',
            ],
            'Home & Living' => [
                'Air Cleaning, Cooling & Heating',
                'Furniture',
                'Health & Beauty Care',
            ],
            'Input Devices' => [
                'Digital Writing Systems',
                'Graphics Tablets',
                'Keyboard/Keypad & Pointing Device Kits',
                'Keyboards & Keypads',
                'Pen Scanners',
                'Pointing Devices',
                'Scanners',
                'Signature Pads',
                'Touchscreen Overlays',
            ],
            'Miscellaneous' => [
                'Miscellaneous',
            ],
            'Multimedia Devices' => [
                'Graphic Cards',
                'Sound Cards',
                'Video Processing/Capturing Modules',
            ],
            'Network & Communication' => [
                'Analog Modems',
                'Broadband Modems',
                'CSUs & DSUs',
                'DSL Switches',
                'Hubs & Repeaters',
                'Infrastructure Management Equipment',
                'KVM Consoles/Extenders',
                'KVM Switchboxes',
                'Modem/NIC Combo',
                'Modules',
            ],
            'Office Equipment & Supplies' => [
                'Adhesive Tapes',
                'Air Freshener Dispensers',
                'Art/Writing Pads & Sheets',
                'Awards & Certificates',
                'Binder Accessories',
                'Binding Machines',
                'Blades',
                'Board Erasers & Correctors',
                'Calculators',
                'Carts & Trolleys',
            ],
            'Power Equipment' => [
                'Batteries',
                'Battery Power Adapters',
                'Chargers',
                'Line Conditioners',
                'PDUs',
                'Power Adapters',
                'Power Injectors/Splitters',
                'Power Inverters',
                'Power Modules',
                'Power Strips',
            ],
            'Printers' => [
                'Dot Matrix Printers',
                'Dye Sublimation Printers',
                'Large Format Printers',
                'Laser & Inkjet Printers',
                'Line Matrix Printers',
                'Multifunction Printers',
                'Thermal & Label Printers',
            ],
            'Publications' => [
                'e-books & Manuals',
            ],
            'Security Devices' => [
                'Alarms & Locks',
                'Authentication Systems',
                'Biometrics',
                'Safety Lockouts',
                'Security & Access Control Devices',
                'Security & Tracking Devices',
                'Video Door Phones',
                'Video Surveillance Systems',
            ],
            'Services & Training' => [
                'Education & Training',
                'Services',
            ],
            'Software Products' => [
                'Hardware Licensing',
                'Operating Systems',
                'Software',
                'Software Licensing',
                'Software Suite',
            ],
            'Storage Components' => [
                'CD Drives',
                'CD/DVD Combo Drives',
                'CD/DVD Duplicators',
                'Flash Drives',
                'Flash Memory Duplicators',
                'FlashCard Readers',
                'Hard Drive Duplicators',
                'Hard Drives/Solid State Drives',
                'Host Bus Adapters',
                'Multiport Serial Adapters',
            ],
            'Telecommunication' => [
                'Analog & Digital Phones',
                'Cellular Phones',
                'Intelligent Fax Boards',
                'IP Phones',
                'Line Sharing Devices',
                'PBX Circuit Cards',
                'Public Address Systems',
                'Video & Web Conference Equipment',
                'Video Servers',
                'Voice Boards',
            ],
        ];


        foreach ($categories as $categoryName => $subcategories) {
            $category = Category::create([
                'name' => $categoryName,
                'slug' => Str::slug($categoryName),
                'status' => true,
            ]);

            foreach ($subcategories as $subcategoryName) {
                SubCategory::create([
                    'category_id' => $category->id,
                    'name' => $subcategoryName,
                    'slug' => Str::slug($subcategoryName),
                    'status' => true,
                ]);
            }


        }

    }
}
