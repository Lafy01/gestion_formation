<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function alluser(Request $request)
    {
        $users = User::all();
        return response()->json([
            'data' => $users,
            'message' => 'List of all users',
        ], 200);
    }
}
