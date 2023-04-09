from django.contrib import admin
from django.urls import path

from blog.views import frontpage, post_detail, shoot, feel, paper

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", frontpage),
    path("shoot/", shoot),
    path("feel/", feel),
    path("paper/", paper),
    path("<slug:slug>/", post_detail, name="post_detail")
]
