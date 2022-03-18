<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function __construct()
    {
        $this->middleware('permission:user.read')->only('index', 'show');
        $this->middleware('permission:user.create')->only('create', 'store');
        $this->middleware('permission:user.update')->only('edit', 'update');
        $this->middleware('permission:user.delete')->only('destroy');
    }
    public function index(){
        $users=User::with('roles', 'permissions')->get();
        return inertia('Users/Index',[

            'users'=>$users
        ]);
    }
    public function Create(){
        return inertia('Users/Create', [
            'roles' => Role::all(),
            'permissions' => Permission::all(),
        ]);
    }
    public function store (Request $request){
        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->name)
        ]);
        if($request->roles) {
            $user->assignRole($request->roles);
        }

        if($request->permissions) {
            $user->syncPermissions($request->permissions);
        }
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
