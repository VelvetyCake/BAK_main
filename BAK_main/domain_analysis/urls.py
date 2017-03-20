from django.conf.urls import include, url
from django.contrib import admin
from . import views

urlpatterns = [
    #url(r'^admin/', admin.site.urls),
    #url(r'^/$', include('main_page.urls')),
    #url(r'^sequence_alignment/', include('sequence_alignment.urls')),
    url(r'^', views.index, name = 'index'),
    #url(r'^similar_proteins/', include('similar_proteins.urls')),
    #url(r'^structural_models/', include('structural_models.urls')),
    #url(r'^conclusion/', include('conclusion.urls')),
    #url(r'^references/', include('references.urls')),
]
