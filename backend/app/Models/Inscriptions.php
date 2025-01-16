<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscriptions extends Model
{
    use HasFactory;
    
    protected $primaryKey = 'id_inscription';
    protected $fillable = [
        'id_user',
        'id_formation',
        'status',
        'date_inscription',
        'date_acceptation',
        'date_refus',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function formation()
    {
        return $this->belongsTo(Formations::class, 'id_formation');
    }
}
