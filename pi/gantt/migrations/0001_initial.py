# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2020-03-04 23:39
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='tb_desenvolvedor',
            fields=[
                ('dev_id', models.AutoField(primary_key=True, serialize=False)),
                ('dev_nome', models.CharField(max_length=90)),
                ('dev_contato', models.BigIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='tb_projeto',
            fields=[
                ('prj_id', models.AutoField(primary_key=True, serialize=False)),
                ('prj_nome', models.CharField(max_length=60)),
                ('prj_escopo', models.CharField(max_length=119)),
                ('prj_datainicio', models.DateField()),
                ('prj_prazoentrega', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='tb_tarefa',
            fields=[
                ('trf_id', models.AutoField(primary_key=True, serialize=False)),
                ('trf_datainicial', models.DateField()),
                ('trf_datafinal', models.DateField(null=True)),
                ('trf_prazo', models.DateField()),
                ('trf_interdependencia', models.IntegerField(null=True)),
                ('trf_entregavel', models.BooleanField(default=False)),
                ('fk_prj_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='gantt.tb_projeto')),
            ],
        ),
    ]