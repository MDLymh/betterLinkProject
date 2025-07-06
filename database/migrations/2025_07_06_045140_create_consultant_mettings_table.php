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
        Schema::create('consultant_mettings', function (Blueprint $table) {
            $table->unsignedBigInteger('id_consultant');
            $table->unsignedBigInteger('id_meeting');
            $table->foreign('id_consultant')->references('id')->on('consultants')->onDelete('cascade');
            $table->foreign('id_meeting')->references('id')->on('mettings')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('consultant_mettings');
    }
};
