<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{

    public function login(Request $request) {
        $validator= Validator::make($request->all(), [
            'email' => 'required|email',
            'mdp' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "data"=>$validator->errors(),
                'message' => 'Validation error'
            ], 422);
        }

        $credentials=$request->only('email', 'mdp');
        try{
        }catch (\Exception $e) {
            return response()->json([
                'data'=>$e->getMessage(),
                'message' => 'Login failed'
            ], 500);
        }

    }

    public function register(Request $request) {
        $validator= Validator::make($request->all(), [
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|email|unique:users',
            'mdp' => 'required|string',
            'role' => 'required|string',
            'tel' => 'required|string',
            'adresse' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                "data"=>$validator->errors(),
                'message' => 'Validation error'
            ], 422);
        }

        try {
            User::create([
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'email' => $request->email,
                'mdp' => Hash::make($request->mdp),
                'role' => $request->role,
                'tel' => $request->tel,
                'adresse' => $request->adresse,
            ]);

            return response()->json([
                'data'=>null,
                'message' => 'User created successfully'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'data'=>$e->getMessage(),
                'message' => 'User creation failed'
            ], 500);
        }
    }
}
