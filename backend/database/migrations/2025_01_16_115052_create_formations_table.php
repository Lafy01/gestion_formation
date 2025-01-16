<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('formations', function (Blueprint $table) {
            $table->id('id_formation');
            $table->string('titre');
            $table->text('description');
            $table->string('categorie');
            $table->integer('durre');
            $table->date('date_deb');
            $table->date('date_fin');
            $table->decimal('prix', 10, 2);
            $table->enum('status', ['active', 'inactive']);
            $table->foreignId('id_formateur')->constrained('users', 'id_user')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('formations');
    }
};