<?php

namespace App\Http\Controllers;

use App\Models\Department;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DepartmentController extends Controller
{
    //
    public function index()
    {
        $departments = Department::paginate(10);
        return Inertia::render('MasterData/Departments/Index', [
            'departments' => $departments,
        ]);
    }
}
