<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $table = 'companies';
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'type',
        'logo',
        'address',
        'email',
        'phone',
        'website',
    ];
     public function Coordinators()
    {
        return $this->hasMany(Coordinator::class);
    }
}
