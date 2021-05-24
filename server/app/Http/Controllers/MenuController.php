<?php

namespace App\Http\Controllers;

use App\Models\Menu;

class MenuController extends Controller
{
    public function getSec($sec, $count)
    {

        $currentSec = 'sec'.$count;

        $prevSec = 'sec'.($count-1);


        $menuItems = Menu::select($currentSec)
            ->where($prevSec, $sec)
            ->distinct($currentSec)
            ->get();

        $map = $menuItems->map(function($items){
            $data['sec'] = $items['sec2'];
            return $data;
        });

        return $map;
    }
}
