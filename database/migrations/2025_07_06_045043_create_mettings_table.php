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
        Schema::create('mettings', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_project');
            $table->boolean('is_active');
            $table->string('description');
            $table->foreign('id_project')->references('id')->on('projects')->onDelete('cascade');
            $table->timestamp('schedule');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mettings');
    }
};
