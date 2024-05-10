<?php

namespace App\Http\Middleware;
use App\Models\Passenger;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PassengerMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!$request->bearerToken()) {
            return response()->json(['error' => 'Unauthorized: Token not provided'], 401);
        }

        // Attempt to authenticate the user with the token
        if (!Auth::guard('sanctum')->check()) {
            return response()->json(['error' => 'Unauthorized: Invalid token'], 401);
        }

        // Get the authenticated user
        $user = Auth::guard('sanctum')->user();

        // Check if the user type matches any of the allowed types
        if (!$user->Passenger instanceof Passenger) {
            return response()->json(['error' => 'Unauthorized: User type not allowed for this request'], 403);
        }

        return $next($request);
        
    }
    
}
