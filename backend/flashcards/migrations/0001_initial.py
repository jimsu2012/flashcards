# Generated by Django 3.2.8 on 2021-10-16 03:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Flashcard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('term', models.CharField(default='', max_length=1023)),
                ('definition', models.CharField(default='', max_length=8191)),
                ('image_url', models.CharField(blank=True, max_length=1023)),
            ],
        ),
    ]
