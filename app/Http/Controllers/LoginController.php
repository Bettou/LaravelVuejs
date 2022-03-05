<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
class LoginController extends Controller
{
    public function index()
    {
        return inertia('Auth/Login');

    }
    public function login(LoginRequest $request){
        $request->authenticate();
        $request->session()->regenerate();
        return redirect()->intended('/home');
    }
    public function logout(Request $request){
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
