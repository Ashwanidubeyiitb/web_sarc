# Generated by Django 4.2.1 on 2024-02-25 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0016_todo_user_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='completion_time',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='todo',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='todo_images/'),
        ),
    ]
