# Generated by Django 4.2.1 on 2023-06-02 02:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('analysis', '0013_analysislevelcrossing_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='analysisfile',
            name='filename',
            field=models.CharField(default='', max_length=255),
        ),
    ]
