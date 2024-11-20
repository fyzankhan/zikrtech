<?php


use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Frontend\ApiController;
use App\Http\Controllers\Frontend\CartController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StoreController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', [StoreController::class, 'index'])->name('index');
Route::get('/all-products', [StoreController::class, 'products'])->name('products.index');
Route::get('/load-more-products', [StoreController::class, 'loadMoreProducts'])->name('products.loadMore');

Route::get('/category/{slug}', [StoreController::class, 'products'])->name('products.category');
Route::get('/brand/{slug}', [StoreController::class, 'products'])->name('products.brand');


/** Cart routes */
Route::post('/add-to-cart', [CartController::class, 'addToCart'])->name('add-to-cart');
Route::get('cart-details', [CartController::class, 'cartDetails'])->name('cart-details');
Route::post('cart/update-quantity', [CartController::class, 'updateProductQty'])->name('cart.update-quantity');
Route::get('clear-cart', [CartController::class, 'clearCart'])->name('clear.cart');
Route::get('cart/remove-product/{rowId}', [CartController::class, 'removeProduct'])->name('cart.remove-product');
Route::get('cart-count', [CartController::class, 'getCartCount'])->name('cart-count');
Route::get('cart-products', [CartController::class, 'getCartProducts'])->name('cart-products');
Route::post('cart/remove-sidebar-product', [CartController::class, 'removeSidebarProduct'])->name('cart.remove-sidebar-product');
Route::get('cart/sidebar-product-total', [CartController::class, 'cartTotal'])->name('cart.sidebar-product-total');

Route::get('nav-cart-products', [CartController::class, 'getNavCartProducts'])->name('nav-cart-products');
Route::get('checkout', [StoreController::class, 'checkout'])->name('checkout');
Route::get('cart', [StoreController::class, 'cart'])->name('cart');




//api

Route::get('home/featured', [StoreController::class, 'featured'])->name('home.featured');

Route::get('api/hardware-menu', [StoreController::class, 'hardwareMenu'])->name('home.hardware-menu');




Route::get('apply-coupon', [CartController::class, 'applyCoupon'])->name('apply-coupon');
Route::get('coupon-calculation', [CartController::class, 'couponCalculation'])->name('coupon-calculation');


Route::get('/product/{slug}', [StoreController::class, 'showProduct'])->name('product.show');

Route::middleware(['auth', 'verified'])->group(function () {

    //Route::resource('user', UserController::class);
});

Route::middleware(['auth', 'role:user'])->group(function () {
    Route::get('/user/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('/user/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/user/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete(uri: '/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});




//api


Route::get('/api/brands', [ApiController::class, 'brands'])
    ->name('api-brands');

Route::get('/api/categories', [ApiController::class, 'categories'])
    ->name('api-categories');


// Route to get all brands associated with a specific category
Route::get('/category/brands/{slug}', [ApiController::class, 'categorybrands']);

// Route to get all categories associated with a specific brand
Route::get('/brand/categories/{slug}', [ApiController::class, 'brandcategories']);

require __DIR__ . '/auth.php';
