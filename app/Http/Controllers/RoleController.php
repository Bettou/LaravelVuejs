<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index(){
        $roles=Role::all();
        return inertia('Roles/Index',[
            'roles'=>$roles
        ]);
    }
    public function Create(){
        return inertia('Roles/Create');
    }
    public function store (Request $request){
        Role::create([
            'name'=>$request->name,
            
        ]);
        return redirect() ->route('roles.index')->with('success','Enregistrement effecutue');
    }
    public function edit(Role $role){
        return inertia('Roles/Edit',['role'=>$role]);

        

    }
    public function update(Request $request,Role $role){
        $role->update([
            'name'=>$request->name,
           
            ]
        );
        return redirect() ->route('roles.index')->with('success','Modification effecutuee');
    }
    public function destroy( Role $role){
      
        $role->delete();
        return redirect() ->route('roles.index')->with('warning','supprimer avec succes');
        

    }
}
