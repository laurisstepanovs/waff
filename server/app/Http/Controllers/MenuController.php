<?php

namespace App\Http\Controllers;

use App\Models\Menu;

class MenuController extends Controller
{
    public function getSec($sec, $count)
    {

        $currentSec = 'sec'.$count;

        $nextSec = 'sec'.($count+1);
        $prevSec = 'sec'.($count-1);

        if($sec == 'home'){
            $menuItems = Menu::select('sec1', 'sec2')
                ->distinct('sec1')
                ->get();

            $map = $menuItems->map(function($items) {
                $data['sec'] = $items['sec1'];
                $data['next'] = $items['sec2'];
                return $data;
            });
        } else {
            $menuItems = Menu::select($currentSec, $nextSec)
                ->where($prevSec, $sec)
                ->distinct($currentSec)
                ->get();

            $map = $menuItems->map(function($items) use ($nextSec, $currentSec) {
                $data['sec'] = $items[$currentSec];
                $data['next'] = $items[$nextSec];
                return $data;
            });
        }

        return $map;
    }
}
