<?php

namespace App\Http\Controllers\Apiv1;

use App\Entities\Empresa;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TestController extends Controller
{
    public function sayhello(Request $request){
        
        return response()->json(['message' => 'Hello from the api!'], 201);
    }
}
