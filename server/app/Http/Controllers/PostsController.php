<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Posts;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class PostsController extends Controller
{
    public function addPost(Request $request)
    {
            $request->validate([
                'title' => ['required'],
                'desc' => ['required']
            ]);

            $file = $request->file('image');
            $name = '/post_images/' . uniqid() . '.' . $file->extension();
            $file->storePubliclyAs('public', $name);

            $post = Posts::create([
                'title' => $request->title,
                'section' => $request->section,
                'path' => $name,
                'desc' => $request->desc
            ]);

            return $post;
    }

    public function getAllPosts(){
        //example usage.
        $posts = DB::table("posts")->orderBy("created_at", "desc")->paginate(16);

        return $posts;
    }

    public function getCurrentPost($post_id){
        $post = Posts::find($post_id);

        return $post;
    }

    public function getPostsBySection($section){

        $finalSection = Str::ucfirst($section);
        $posts = DB::table("posts")->orderBy("created_at", "desc");

        $result = $posts->where("section", $finalSection)->paginate(16);

        return $result;
    }
}
