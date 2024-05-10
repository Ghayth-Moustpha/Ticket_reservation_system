<?php

namespace App;
use Illuminate\Database\Eloquent\Factories\HasFactory;

use Illuminate\Database\Eloquent\Model;

class Trip extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'price',
        'vehicle_id',
        'source_id',
        'destination_id',
        'company_id',
        'departure',
        'duration',
    ];

    /**
     * Get the vehicle associated with the trip.
     */
    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    /**
     * Get the source station associated with the trip.
     */
    public function source()
    {
        return $this->belongsTo(Station::class, 'source_id');
    }

    /**
     * Get the destination station associated with the trip.
     */
    public function destination()
    {
        return $this->belongsTo(Station::class, 'destination_id');
    }

    /**
     * Get the company associated with the trip.
     */
    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}