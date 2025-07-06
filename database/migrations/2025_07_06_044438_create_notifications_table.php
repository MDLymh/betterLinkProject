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
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('type');
            $table->foreign('type')->references('id')->on('type_notifications')->onDelete('cascade');
            $table->unsignedBigInteger('id_user_sender');
            $table->foreign('id_user_sender')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('id_user_reciever');
            $table->foreign('id_user_reciever')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('id_project')->nullable();
            $table->foreign('id_project')->references('id')->on('projects')->onDelete('cascade');
            $table->text('content');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('notifications');
    }
};
