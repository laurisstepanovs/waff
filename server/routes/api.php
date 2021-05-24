<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\MenuController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/login', [LoginController::class, 'login']);
Route::post('/register', [RegisterController::class, 'register']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:api');
Route::post('/add_post', [PostsController::class, 'addPost']);
Route::get('/posts', [PostsController::class, 'getAllPosts']);
Route::post('/current_post/{post_id}', [PostsController::class, 'getCurrentPost']);
Route::post('/post_by_section/{section}', [PostsController::class, 'getPostsBySection']);
Route::get('/menus/{sec}/{count}', [MenuController::class, 'getSec']);
