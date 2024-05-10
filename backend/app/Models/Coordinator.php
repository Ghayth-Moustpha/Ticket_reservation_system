<?php

namespace App\Models;
use App\Models\User;
use App\Models\Company;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coordinator extends User
{
    use HasFactory;

    protected $fillable = [
        'user_id' , 'company_id' // Add other attributes as needed
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    public function Company()
    {
        return $this->belongsTo(Company::class, 'company_id', 'id'); // Update to use 'companies' table
    }
}
