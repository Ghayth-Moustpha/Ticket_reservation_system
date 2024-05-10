<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\StationController; 




Route::get("/allcompanies" , [CompanyController::class  , 'index'] ) ; 



Route::post('{type}/login', [LoginController::class, 'login']);

Route::resource('stations', StationController::class);
