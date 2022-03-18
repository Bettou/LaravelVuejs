<?php

namespace Database\Seeders;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = \App\Models\User::factory(1)->create(['email'=>'admin@site.com'])[0];
         \App\Models\User::factory(500)->create();

         $role = Role::create(['name' => 'Super Admin']);
         $user->assignRole($role);

         Permission::create(['name' => 'user.create']);
         Permission::create(['name' => 'user.read']);
         Permission::create(['name' => 'user.update']);
         Permission::create(['name' => 'user.delete']);
    }
}
