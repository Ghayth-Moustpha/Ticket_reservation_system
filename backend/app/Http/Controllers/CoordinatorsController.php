<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Company;
use App\Models\Coordinator;
use Illuminate\Http\Request;

class CoordinatorsController extends Controller
{
    public function index()
{
    // Retrieve all Coordinators with their associated Users eager loaded
    $coordinators = Coordinator::with('user' , 'company')->get();

    // Return the list of Coordinators along with their associated Users
    return response()->json([ "Coordinators" => $coordinators], 200);
}

    public function store(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'company_id' => 'required|exists:companies,id',
        ]);

        $user = User::create([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')), // Use appropriate password hashing
        ]);

        // Create a new Coordinator instance linked to the created User
        $coordinator = Coordinator::create([
            'user_id' => $user->id,
            'company_id' => $request->input('company_id'),
        ]);

        // You can return the created coordinator if needed
        return response()->json($coordinator, 201);
    }

    public function show($id)
{
    // Find the Coordinator by ID with the associated User eager loaded
    $coordinator = Coordinator::with('user')->findOrFail($id);

    // Return the Coordinator along with the associated User
    return response()->json($coordinator, 200);
}
public function update(Request $request, $id)
{
    // Validate incoming request data
    $request->validate([
        'first_name' => 'required|string',
        'last_name' => 'required|string',
        'email' => 'required|email|unique:users,email,' . $id, // Ignore current record's email for uniqueness validation
        'company_id' => 'required|exists:companies,id',
    ]);

    // Find the Coordinator by ID
    $coordinator = Coordinator::findOrFail($id);

    // Update the associated User data
    $coordinator->user()->update([
        'first_name' => $request->input('first_name'),
        'last_name' => $request->input('last_name'),
        'email' => $request->input('email'),
    ]);

    // Update the Coordinator data
    $coordinator->update([
        'company_id' => $request->input('company_id'),
    ]);

    // Reload the updated Coordinator with the associated User
    $coordinator->load('user');

    // Return the updated Coordinator along with the associated User
    return response()->json($coordinator, 200);
}
public function destroy($id)
    {
        $coordinator = Coordinator::findOrFail($id);
        $coordinator->delete();
        return response()->json(null, 204);
    }

}
