import time

from django.db import models
from django.conf import settings
import json


class AnalysisFile(models.Model):
    # Create your models here.
    file = models.FileField(upload_to='files/')
    chart_cell_name = models.CharField(max_length=255, blank=True)
    car_type = models.CharField(max_length=255, blank=True)
    area = models.CharField(max_length=255, blank=True)
    year = models.CharField(max_length=255, blank=True)
    weight = models.CharField(max_length=255, null=True)
    test_count = models.CharField(max_length=255, null=True)
    road_surface = models.CharField(max_length=50)
    xc_split_range = models.CharField(max_length=255)
    chart_data = models.TextField(null=True)
    archive_yn = models.CharField(max_length=1, default='N')
    filename = models.CharField(max_length=255, default='')
    recoding_at = models.DateTimeField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return json.dumps({
            "car_type": self.car_type,
            "area": self.area,
            "year": self.year,
            "weight": self.year,
            "archive_yn": self.archive_yn,
            "road_surface": self.road_surface,
            "recoding_at": self.recoding_at,
            "created_at": self.created_at,
            "uploaded_at": self.uploaded_at,
        })


# Create your models here.
class AnalysisLevelCrossing(models.Model):
    STATUS_UPLOADED = 'UPLOADED'
    STATUS_REQUEST = 'REQUEST'
    STATUS_PENDING = 'PENDING'
    STATUS_ERROR = 'ERROR'
    STATUS_REQUEST_STOP = 'REQUEST_STOP'
    STATUS_STOP = 'STOP'
    STATUS_SUCCESS = 'SUCCESS'
    STATUSES = (
        (STATUS_UPLOADED, 'Uploaded'),
        (STATUS_REQUEST, 'Request'),
        (STATUS_REQUEST_STOP, 'RequestStop'),
        (STATUS_PENDING, 'Pending'),
        (STATUS_ERROR, 'Error'),
        (STATUS_STOP, 'Stop'),
        (STATUS_SUCCESS, 'Success'),
    )

    analysis_file_id = models.IntegerField(blank=False, null=False)
    title = models.CharField(max_length=255, blank=False, null=False)
    chart_data = models.TextField(null=True)
    start_pos = models.IntegerField(null=True)
    end_pos = models.IntegerField(null=True)
    # file = models.CharField(max_length=4096, blank=False, null=False)
    status = models.CharField(max_length=50, default=STATUS_REQUEST)
    archive_yn = models.CharField(max_length=1, default='N')
    image = models.CharField(max_length=2048, null=True)
    images = models.JSONField(default=dict)
    filename = models.CharField(max_length=255, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __repr__(self):
        return 'Resume(%s)' % self.title

    def __str__(self):
        return json.dumps({
            "name": self.title,
            "analysis_file_id": self.analysis_file_id,
            "status": self.status,
            "archive_yn": self.archive_yn
        })
