# Generated by Django 4.2.1 on 2023-05-23 21:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('analysis', '0002_analysisfile_chart_data'),
    ]

    operations = [
        migrations.RenameField(
            model_name='analysisfile',
            old_name='identification_number',
            new_name='road_surface',
        ),
        migrations.RenameField(
            model_name='analysisfile',
            old_name='username',
            new_name='weight',
        ),
        migrations.RenameField(
            model_name='analysisfile',
            old_name='durability',
            new_name='year',
        ),
    ]