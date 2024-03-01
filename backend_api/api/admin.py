from django.contrib import admin
from api.models import User,Profile, Todo

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']


class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display = ['user', 'full_name' ,'verified']

admin.site.register(User, UserAdmin)
admin.site.register( Profile,ProfileAdmin)

class TodoAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed', 'date', 'time', 'location')  # Update the list_display attribute

# Register your models here.
admin.site.register(Todo, TodoAdmin)