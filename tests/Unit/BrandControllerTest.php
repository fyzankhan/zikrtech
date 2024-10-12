<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Http\Controllers\Backend\BrandController;
use App\Repositories\Backend\Brand\BrandInterface;
use App\Http\Requests\BrandStoreRequest;
use App\Http\Requests\BrandUpdateRequest;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Inertia\Testing\Assert;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;
use Mockery;


class BrandControllerTest extends TestCase
{
    use RefreshDatabase, WithFaker;

    protected $brandRepositoryMock;

    protected function setUp(): void
    {
        parent::setUp();

        // Mock the BrandInterface repository
        $this->brandRepositoryMock = Mockery::mock(BrandInterface::class);
        $this->app->instance(BrandInterface::class, $this->brandRepositoryMock);
    }

    public function tearDown(): void
    {
        Mockery::close();
        parent::tearDown();
    }

    public function test_index_displays_brands()
    {
        // Mock the paginate method
        $this->brandRepositoryMock->shouldReceive('query->paginate')
            ->once()
            ->andReturn(collect([]));

        // Make a GET request to the index route
        $response = $this->get(route('admin.brands.index'));

        // Assert the response status and Inertia view
        $response->assertStatus(200)
            ->assertInertia(
                fn(Assert $page) => $page
                    ->component('Backend/Brand/Index')
                    ->has('brands')
                    ->has('search')
            );
    }
}
