<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'trip_id',
        'seat',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get the trip associated with the reservation.
     */
    public function trip()
    {
        return $this->belongsTo(Trip::class);
    }
    
}
