<?php 
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Admin extends Authenticatable
{
    use Notifiable;

    protected $table = 'admins';
    protected $fillable = [
        'user_id' , // Add other attributes as needed
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Other admin-specific code...
}