<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Modules extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_module';
    protected $fillable = [
        'titre',
        'description',
        'durre_estime',
        'ordre',
        'id_formation',
    ];

    public function formation()
    {
        return $this->belongsTo(Formations::class, 'id_formation');
    }
}

