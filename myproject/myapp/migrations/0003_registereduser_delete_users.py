# Generated by Django 5.1.2 on 2024-10-22 14:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0002_courses'),
    ]

    operations = [
        migrations.CreateModel(
            name='RegisteredUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('UserName', models.CharField(max_length=255)),
                ('UserEmail', models.CharField(max_length=255)),
                ('UserPassword', models.CharField(max_length=255)),
            ],
        ),
        migrations.DeleteModel(
            name='Users',
        ),
    ]