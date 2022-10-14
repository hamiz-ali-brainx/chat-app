<?php

use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/






Route::post('/post-registration', "App\Http\Controllers\RegistrationController@postRegistration")->name('register.post')->middleware(["guest"]);
Route::post('/login/post', "App\Http\Controllers\SessionsController@store")->name('login.post')->middleware(['is_verify_email']);
Route::get('/verification/{token}', 'App\Http\Controllers\RegistrationController@verification')->name('user.verify');
Route::post("/forgot-password", "App\Http\Controllers\ForgotPasswordController@forgotPasswordForm")->name("forgot.password");
Route::post("/reset-password/{token}", "App\Http\Controllers\ForgotPasswordController@resetPassword");
