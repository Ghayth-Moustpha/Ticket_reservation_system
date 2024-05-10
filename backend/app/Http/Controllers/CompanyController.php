<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CompanyController extends Controller
{
    public function index()
    {
        $companies = Company::all();

        return response()->json(['companies' => $companies]);
    }

    public function store(Request $request)
    {

        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'type' => 'required',
            'logo' => 'required|image',
            'address' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'website' => 'required|url',
        ]);

        $logoPath = $request->file('logo')->store('logos', 'public');

        $company = Company::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'type' => $request->input('type'),
            'logo' => $logoPath,
            'address' => $request->input('address'),
            'email' => $request->input('email'),
            'phone' => $request->input('phone'),
            'website' => $request->input('website'),
        ]);

        return response()->json(['message' => 'Company created successfully', 'data' => $company], 201);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'type' => 'required',
            'address' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'website' => 'required|url',
        ]);

        $company = Company::findOrFail($id);

        if ($request->hasFile('logo')) {
            $request->validate([
                'logo' => 'image',
            ]);

            $logoPath = $request->file('logo')->store('logos', 'public');

            // Delete the old logo file
            Storage::disk('public')->delete($company->logo);

            $company->logo = $logoPath;
        }

        $company->name = $request->input('name');
        $company->description = $request->input('description');
        $company->type = $request->input('type');
        $company->address = $request->input('address');
        $company->email = $request->input('email');
        $company->phone = $request->input('phone');
        $company->website = $request->input('website');
        $company->save();

        return response()->json(['message' => 'Company updated successfully', 'data' => $company]);
    }

    public function destroy($id)
    {
        $company = Company::findOrFail($id);

        // Delete the logo file
        Storage::disk('public')->delete($company->logo);

        $company->delete();

        return response()->json(['message' => 'Company deleted successfully']);
    }
}