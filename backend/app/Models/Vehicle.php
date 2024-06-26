<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'model',
        'type',
        'sitting',
        'line',
        'image', 
        'company_id',
    ];

    /**
     * Get the company associated with the vehicle.
     */
    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
