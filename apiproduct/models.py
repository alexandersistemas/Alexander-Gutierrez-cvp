from django.db import models

# Create your models here.

class Producto(models.Model):
    id          = models.AutoField(primary_key=True)
    nombre      = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=255)
    precio      = models.DecimalField(max_digits=14, decimal_places=2, null=False)
    cantidad    = models.IntegerField()

    class Meta:
        db_table = 'Producto'
        verbose_name_plural = 'Productos'

    def __str__(self):
        return str(self.pk)

