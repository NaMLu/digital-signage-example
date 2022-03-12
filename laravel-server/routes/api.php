<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/playlist', [\App\Http\Controllers\Api\PlayListController::class, "all"]);
Route::post('/add', [\App\Http\Controllers\Api\PlayListController::class, "add"]);
