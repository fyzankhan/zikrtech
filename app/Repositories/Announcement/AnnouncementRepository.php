<?php

namespace App\Repositories\Announcement;

use App\Models\Announcement;
use App\Repositories\Base\BaseRepository;

class AnnouncementRepository extends BaseRepository implements AnnouncementInterface
{
    public function __construct(Announcement $model)
    {
        parent::__construct($model, 'announcements');
    }
}
