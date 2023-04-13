# Generated by Django 4.2 on 2023-04-12 00:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=100)),
                ('descripcion', models.CharField(max_length=255)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=14)),
                ('cantidad', models.IntegerField()),
            ],
            options={
                'verbose_name_plural': 'Productos',
                'db_table': 'Producto',
            },
        ),
    ]