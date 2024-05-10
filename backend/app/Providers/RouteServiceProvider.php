<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to the "home" route for your application.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        $this->configureRateLimiting();

        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api')
                ->group(base_path('routes/api.php'));

            Route::middleware('web')
                ->group(base_path('routes/web.php'));

            $this->mapAdminRoutes();
            $this->mapCoordinatorRoutes();
            $this->mapPassengerRoutes();
        });
    }

    /**
     * Configure the rate limiters for the application.
     */
    protected function configureRateLimiting(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });

        RateLimiter::for('web', function (Request $request) {
            return Limit::perMinute(60)->by($request->ip());
        });
    }

    protected function mapAdminRoutes()
    {
        Route::prefix('admin')
            ->middleware(['api', 'auth.admin'])
            ->namespace($this->namespace)
            ->group(base_path('routes/admin.php'));
    }

    protected function mapCoordinatorRoutes()
    {
        Route::prefix('coordinator')
            ->middleware(['api', 'auth.coordinator'])
            ->namespace($this->namespace)
            ->group(base_path('routes/coordinator.php'));
    }

    protected function mapPassengerRoutes()
    {
        Route::prefix('passenger')
            ->middleware(['api', 'auth.passenger'])
            ->namespace($this->namespace)
            ->group(base_path('routes/passenger.php'));
    }
}