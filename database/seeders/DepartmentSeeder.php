<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('departments')->insert([
            [
                'name' => 'Human Resources',
                'description' => 'Handles recruitment, employee relations, and compliance',
            ],
            [
                'name' => 'Finance',
                'description' => 'Manages the financial operations of the company',
            ],
            [
                'name' => 'Marketing',
                'description' => 'Focuses on promoting and selling products or services',
            ],
            [
                'name' => 'IT Support',
                'description' => 'Responsible for maintaining computer systems and networks',
            ],
        ]);
    }
}
