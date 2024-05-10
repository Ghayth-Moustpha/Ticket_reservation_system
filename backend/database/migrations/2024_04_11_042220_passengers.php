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
        Schema::create('passengers', function (Blueprint $table){
            $table->foreignId('user_id')->primary();
            $table->boolean("acitve")->default(true) ; 
        $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');         $table->timestamps(); 

    });


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('passengers');

    }
};
