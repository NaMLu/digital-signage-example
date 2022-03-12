<?php

namespace App\Repositories;

use App\Http\Requests\Api\AddPlayListItemRequest;
use App\Interfaces\PlayListItemInterface;
use App\Models\Item;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Collection;
use Illuminate\Validation\Rule;

class PlayListItemRepository implements PlayListItemInterface {
    protected $model;

    public function __construct(Item $model)
    {
        $this->model = $model;
    }

    public function add(FormRequest $request): Model
    {
        $request->validate([
            'name' => 'required',
            'url' => 'required|url',
            'duration' => 'required|numeric|min:1',
            'type' => [
                'required',
                Rule::in(['image', 'video'])
            ]
        ]);

        $data = $request->validated();
        return $this->model->create($data);
    }

    public function all(): Collection
    {
        return $this->model->all();
    }
}
