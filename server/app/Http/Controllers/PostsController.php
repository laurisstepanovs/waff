<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posts;

class PostsController extends Controller
{
    public function addPost(Request $request)
    {
        $request->validate([
            'title' => ['required'],
            'desc' => ['required']
        ]);

        $post = Posts::create([
            'title' => $request->title,
            'desc' => $request->desc,
        ]);

        return $post;
    }

    public function getAllPosts(){
        //example usage.
        $posts = Posts::all();

        return $posts;
    }
}
