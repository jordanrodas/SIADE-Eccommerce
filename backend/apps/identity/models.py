from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    """Usuario de SIADE con uno de los roles internos del sistema."""

    class Role(models.TextChoices):
        ADMIN = "admin", "Administrativo"
        SELLER = "seller", "Vendedora"

    role = models.CharField(max_length=20, choices=Role.choices, default=Role.ADMIN)
