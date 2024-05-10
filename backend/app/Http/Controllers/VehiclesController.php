<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class VehiclesController extends Controller
// MVC -- Controller  Vehicle . Trips , User , Reserviation  , 

//CURD = create , update , read , delete 

{
    public function __construct()
    {
        // Apply the 'admin' middleware to the 'yourAction' method
        $this->middleware('auth.coordinator')->only(['destroy', 'update' ,'store']);
    }


    public function index()
    {
        $vehicles = Vehicle::all();

        return response()->json($vehicles);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'model' => 'required|string',
            'type' => 'required|string',
            'image' => 'required|image',
            'sitting' => 'string|nullable',
            'line' => 'integer',
            'company_id' => 'required|exists:companies,id',
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = $image->store('vehicle_images', 'public');
            $validatedData['image'] = Storage::disk('public')->url($path);
        }

        $vehicle = Vehicle::create($validatedData);

        return response()->json($vehicle, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $vehicle = Vehicle::findOrFail($id);

        return response()->json($vehicle);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $vehicle = Vehicle::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'string',
            'model' => 'string',
            'type' => 'string',
            'image' => 'image',
            'sitting' => 'string|nullable',
            'line' => 'integer',
            'company_id' => 'exists:companies,id',
        ]);

        // Handle image upload
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $path = $image->store('vehicle_images', 'public');
            $validatedData['image'] = Storage::disk('public')->url($path);

            // Delete the previous image if it exists
            Storage::disk('public')->delete($vehicle->image);
        }

        $vehicle->update($validatedData);

        return response()->json($vehicle);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $vehicle = Vehicle::findOrFail($id);

        // Delete the image if it exists
        Storage::disk('public')->delete($vehicle->image);

        $vehicle->delete();

        return response()->json(null, 204);
    }
}