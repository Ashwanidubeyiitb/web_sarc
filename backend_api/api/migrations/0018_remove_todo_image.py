# Generated by Django 4.2.1 on 2024-02-25 16:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_todo_completion_time_todo_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='image',
        ),
    ]
