from django.urls import path, include
from .views import get_account, positions, create_order, order_history, market_data, recommendation


urlpatterns = [
    path('account/', get_account),
    path('positions/', positions),
    path('create_order/', create_order),
    path('order_history/', order_history),
    path('market_data/', market_data),
    path('recommendation/', recommendation)
]
