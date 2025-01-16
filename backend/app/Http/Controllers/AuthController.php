<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email'    => 'required|email',
            'mdp' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['error' => 'Email incorrect'], 401);
        }

        if (!Hash::check($request->mdp, $user->mdp)) {
            return response()->json(['error' => 'Mot de passe incorrect'], 401);
        }

        try {
            $token = JWTAuth::fromUser($user);
        } catch (JWTException $e) {
            return response()->json(['error' => 'Could not create token'], 500);
        }

        return response()->json([
            'data' => [
                'token' => $token,
                'user' => $user
            ],
            'message' => 'Login successful'
        ]);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
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
                "data" => $validator->errors(),
                'message' => 'Validation error'
            ], 422);
        }

        try {
            User::create([
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'email' => $request->email,
                'mdp' => bcrypt($request->mdp),
                'role' => $request->role,
                'tel' => $request->tel,
                'adresse' => $request->adresse,
            ]);

            return response()->json([
                'data' => null,
                'message' => 'User created successfully'
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'data' => $e->getMessage(),
                'message' => 'User creation failed'
            ], 500);
        }
    }
}
