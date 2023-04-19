from django.contrib import admin
from django.urls import path

from blog.views import frontpage, post_detail, shoot, feel, paper, aboutkatsu

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", frontpage, name="frontpage"),
    path("shoot/", shoot),
    path("feel/", feel),
    path("paper/", paper),
    path("aboutkatsu/", aboutkatsu),
    path("<slug:slug>/", post_detail, name="post_detail")
]
