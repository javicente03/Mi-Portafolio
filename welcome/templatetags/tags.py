from django import template

try:
    from django.urls import reverse, NoReverseMatch
except ImportError:
    from django.core.urlresolvers import reverse, NoReverseMatch

register = template.Library()

# Menu
@register.inclusion_tag('tags/menu.html')
def menu(user):
    return {'user':user}

#About
@register.inclusion_tag('tags/about.html')
def about(user):
    return {'user':user}

#Tecnologies
@register.inclusion_tag('tags/technologies.html')
def technologies(user):
    return {'user':user}

#Education
@register.inclusion_tag('tags/education.html')
def education(user):
    return {'user':user}

#Contact
@register.inclusion_tag('tags/contact.html')
def contact(user):
    return {'user':user}

#footer
@register.inclusion_tag('tags/footer.html')
def footer(user):
    return {'user':user}