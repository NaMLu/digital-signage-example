<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\AddPlayListItemRequest;
use App\Interfaces\PlayListItemInterface;
use Illuminate\Http\Request;

class PlayListController extends Controller
{
    private $interface;
    public function __construct(PlayListItemInterface $interface) {
        $this->interface = $interface;
    }

    public function all() {
        return response()->json([
            'items' => $this->interface->all(),
            'message' => 'Success.'
        ]);
    }

    public function add(AddPlayListItemRequest $request) {
        return response()->json([
            'items' => [$this->interface->add($request)],
            'message' => 'Succes.'
        ]);
    }
}
