# Generated by Django 4.2.1 on 2023-05-25 00:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('analysis', '0009_rename_name_analysislevelcrossing_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='analysisfile',
            name='archive_yn',
            field=models.CharField(default='N', max_length=1),
        ),
        migrations.AddField(
            model_name='analysislevelcrossing',
            name='archive_yn',
            field=models.CharField(default='N', max_length=1),
        ),
    ]