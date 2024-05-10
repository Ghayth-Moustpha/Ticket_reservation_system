<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Admin;

class supperAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            'first_name' => 'Huda',
            'last_name' => 'Tasneem',
            'email' => 'admin@spu.com',
            'password' => bcrypt('admin@spu.com'),
        ]);
        $admin = Admin::create([
            'user_id' => $user->id,

        ]);
    }
}
