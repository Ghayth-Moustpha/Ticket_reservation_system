<?php 
namespace App\Models;
use App\Models\Admin;
use App\Models\Coordinator;
use App\Models\Passeger;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    public function role()
    {
        return $this->morphTo();
    }
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'image',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the admin associated with the user.
     */
    public function Admin()
    {
        return $this->hasOne(Admin::class);
    }
    public function Coordinator()
    {
        return $this->hasOne(Coordinator::class);
    }
    public function Passeger()
    {
        return $this->hasOne(Passeger::class);
    }
}