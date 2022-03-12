<?php

namespace App\Interfaces;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Collection;

interface PlayListItemInterface {
    public function add(FormRequest $request): Model;
    public function all(): Collection;
}
