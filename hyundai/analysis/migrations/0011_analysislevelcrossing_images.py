# Generated by Django 4.2.1 on 2023-05-25 01:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('analysis', '0010_analysisfile_archive_yn_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='analysislevelcrossing',
            name='images',
            field=models.JSONField(default=dict),
        ),
    ]
