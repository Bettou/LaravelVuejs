<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function __construct()
    {
        //this->middleware('role:salimata')->only('index');
    }
    public function index(){
        $users=User::all();
        return inertia('Users/Index',[
    
            'users'=>$users
        ]);
    }
    public function Create(){
        return inertia('Users/Create');
    }
    public function store (Request $request){
        User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->name)
        ]);
        return redirect() ->route('users.index')->with('success','Enregistrement effecutue');
    }
    public function edit(User $user){
        return inertia('Users/Edit',['user'=>$user]);

        

    }
    public function update(Request $request,User $user){
        $user->update([
            'name'=>$request->name,
            'email'=>$request->email
            ]
        );
        return redirect() ->route('users.index')->with('success','Modification effecutuee');
    }
    public function destroy( User $user){
      
        $connectuser= auth()->user();
        if ($user->id==$connectuser->id){
            return redirect() ->route('users.index')->with('info','vous ne pouvez supprimer lutilisateur');
        }
        $user->delete();
        return redirect() ->route('users.index')->with('warning','supprimer avec succes');
        

    }
}
