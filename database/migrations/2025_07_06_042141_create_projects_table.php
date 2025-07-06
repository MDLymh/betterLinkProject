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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_consultant');
            $table->foreign('id_consultant')->references('id')->on('consultants')->onDelete('cascade');
            $table->string('area');
            $table->integer('max_members');
            $table->text('required_knowledge');
            $table->text('description');
            $table->boolean('is_active')->default(true);
            $table->timestamp('creation_date');
            $table->string('photo')->nullable();
            $table->string('project_name');
            $table->unsignedBigInteger('leader');
            $table->foreign('leader')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
