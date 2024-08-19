<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\Blog\BlogCategoryInterface;
use App\Repositories\Blog\BlogCategoryRepository;
use App\Repositories\Backend\Category\CategoryInterface;
use App\Repositories\Backend\Category\CategoryRepository;
use App\Repositories\Backend\Brand\BrandInterface;
use App\Repositories\Backend\Brand\BrandRepository;
class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {

        $this->app->bind(BlogCategoryInterface::class, BlogCategoryRepository::class);
        $this->app->bind(CategoryInterface::class, CategoryRepository::class);
        $this->app->bind(BrandInterface::class, BrandRepository::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
