# Generated by Django 4.2.1 on 2023-05-23 21:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('analysis', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='analysisfile',
            name='chart_data',
            field=models.TextField(null=True),
        ),
    ]