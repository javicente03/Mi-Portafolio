from django import template

try:
    from django.urls import reverse, NoReverseMatch
except ImportError:
    from django.core.urlresolvers import reverse, NoReverseMatch

register = template.Library()

# Menu de Administrador
@register.inclusion_tag('tags/menu.html')
def menu(user):
    return {'user':user}