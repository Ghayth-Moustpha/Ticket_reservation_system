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
        Schema::create('trips', function (Blueprint $table) {
            $table->id();
            $table->timestamps(); 
            $table->string("title");  
            $table->Decimal("price") ; 
            $table->foreignId("vehicle_id") ; 
            $table->foreignId("source_id") ; 
            $table->foreignId("destination_id"); 
            $table->foreignId("company_id") ; 
            $table->date("departure") ; 
            $table->integer("duration");

            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');
            $table->foreign('destination_id')->references('id')->on('stations')->onDelete('cascade');
            $table->foreign('source_id')->references('id')->on('stations')->onDelete('cascade');
            $table->foreign('vehicle_id')->references('id')->on('vehicles')->onDelete('cascade');





        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trips');
    }
};
