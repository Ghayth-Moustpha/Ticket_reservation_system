<?php 
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use Illuminate\Http\Request;
use App\Http\Controllers\CoordinatorsController;


Route::resource('companies', CompanyController::class);
Route::resource('coordinators', CoordinatorsController::class);
