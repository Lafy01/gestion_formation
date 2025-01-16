<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formations extends Model
{
    use HasFactory;

    protected $primaryKey = 'id_formation';
    protected $fillable = [
        'titre',
        'description',
        'date_debut',
        'date_fin',
        'prix',
        'id_formateur',
    ];

    public function modules()
    {
        return $this->hasMany(Modules::class, 'id_formation');
    }

    public function formateur()
    {
        return $this->belongsTo(User::class, 'id_formateur');
    }

    public function inscriptions()
    {
        return $this->hasMany(Inscriptions::class, 'id_formation');
    }
}
