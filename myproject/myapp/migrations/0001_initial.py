# Generated by Django 5.1.2 on 2024-10-18 07:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('UserId', models.AutoField(primary_key=True, serialize=False)),
                ('UserName', models.CharField(max_length=50)),
                ('UserEmail', models.EmailField(max_length=254)),
                ('UserPassword', models.CharField(max_length=50)),
                ('UserCheckbox', models.BooleanField(default=False)),
            ],
        ),
    ]
