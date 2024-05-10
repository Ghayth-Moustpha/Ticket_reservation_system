<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PassengersController extends Controller
{
    public function register ( Request $request ) {
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
        ]);

        $user = User::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')), // Use appropriate password hashing
        ]);

        // Create a new Coordinator instance linked to the created User
        $coordinator = Passenger::create([
            'user_id' => $user->id,
            'active' => '1'
        ]);

        // You can return the created coordinator if needed
        return response()->json($coordinator, 201);   
    }
}
