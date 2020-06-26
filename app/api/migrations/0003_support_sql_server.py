# Generated by Django 2.1.7 on 2019-06-26 13:20

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0002_approve_document_labels'),
    ]

    operations = [
        migrations.AlterField(
            model_name='seq2seqannotation',
            name='text',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterUniqueTogether(
            name='seq2seqannotation',
            unique_together={('document', 'user', 'text')},
        ),
        migrations.AlterUniqueTogether(
            name='label',
            unique_together={('project', 'text')},
        ),
    ]
