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
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->timestamps(); 
            $table->string("name") ; 
            $table->string("model") ; 
            $table->string("type") ; 
            $table->string("image") ; 
            //sitting
            $table->string("sitting")->default("AB_CD"); 
            $table->integer("line"); 

            $table->foreignId("company_id"); 
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};
