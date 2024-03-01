# Generated by Django 4.2.1 on 2024-02-24 07:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_todo'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='todo',
            name='location',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='todo',
            name='time',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='todo',
            name='user_id',
            field=models.IntegerField(default=-1),
        ),
        migrations.AddField(
            model_name='todo',
            name='username',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='todo',
            name='description',
            field=models.TextField(blank=True, max_length=1000, null=True),
        ),
    ]