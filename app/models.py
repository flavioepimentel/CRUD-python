from django.db import models

# Create your models here.
class Carros(models.Model):
    modelo = models.CharField(max_length=80, error_messages= {'required':'Please enter the model'})
    marca = models.CharField(max_length=80, error_messages= {'required':'Please enter the model'})
    ano = models.IntegerField(error_messages={'required':'Please enter the year'})