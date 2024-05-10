<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Admin;
use App\Models\Coordinator;
use App\Models\Passenger;

class LoginController extends Controller
{
    public function login(Request $request, $type)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::guard('users')->attempt($credentials)) {
            $user = Auth::guard('users')->user();
            $token = $user->createToken($type . 'Token')->plainTextToken;

            if ($this->isInstanceOfType($user, $type)) {
                return response()->json(['token' => $token  , 'user'=>$user], 200);
            } else {
                return response()->json(['error' => 'Unauthorized type' ], 401);
            }
        }

        return response()->json(['error' => 'Unauthorized credentials'], 401);
    }

    private function isInstanceOfType($user, $type)
    {
        switch ($type) {
            case 'admin':
                // Check if the user is an instance of Admin
                return $user->Admin instanceof Admin;
            case 'coordinator':
                // Check if the user is an instance of Coordinator
                return $user->Coordinator instanceof Coordinators;
            case 'passenger':
                return $user->Passenger instanceof Passenger;
            default:
                return false;
        }
    }
}